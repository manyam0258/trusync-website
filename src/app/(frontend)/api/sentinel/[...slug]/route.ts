import { NextRequest, NextResponse } from "next/server";

/**
 * Same-origin gateway to the Sentinel DPDP consent backend.
 * Only the two calls the website makes are allowed. Any other method name is refused,
 * so visitors cannot reach the rest of the backend through this route.
 */
const BACKEND = process.env.SENTINEL_BACKEND_URL || process.env.NEXT_PUBLIC_SENTINEL_URL || "http://127.0.0.1:8001";
const BASE_PATH = "/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.";

const ALLOWED: Record<string, "GET" | "POST"> = {
  get_form_policy: "GET",
  capture_event: "POST",
};

// Query parameters the policy call is allowed to forward.
const POLICY_PARAMS = ["form_id", "language"];
const MAX_BODY_BYTES = 20_000;
const TIMEOUT_MS = 10_000;

type Ctx = { params: Promise<{ slug: string[] }> };

const refuse = (status: number, message: string) => NextResponse.json({ error: message }, { status });

async function endpointFor(context: Ctx, method: "GET" | "POST") {
  const { slug } = await context.params;
  if (slug.length !== 1 || ALLOWED[slug[0]] !== method) return null;
  return slug[0];
}

const forward = async (url: string, init: RequestInit) => {
  try {
    const res = await fetch(url, { ...init, signal: AbortSignal.timeout(TIMEOUT_MS) });
    const data = await res.json().catch(() => null);
    if (data === null) return refuse(502, "The privacy service returned an unexpected response.");
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    // Details stay in the server log. Visitors get a generic message.
    console.error("Sentinel proxy error:", err instanceof Error ? err.message : err);
    return refuse(502, "The privacy service is not available right now.");
  }
};

export async function GET(request: NextRequest, context: Ctx) {
  const endpoint = await endpointFor(context, "GET");
  if (!endpoint) return refuse(404, "Not found");

  const params = new URLSearchParams();
  for (const key of POLICY_PARAMS) {
    const value = request.nextUrl.searchParams.get(key);
    if (value) params.set(key, value.slice(0, 100));
  }
  const query = params.toString();
  return forward(`${BACKEND}${BASE_PATH}${endpoint}${query ? `?${query}` : ""}`, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
}

export async function POST(request: NextRequest, context: Ctx) {
  const endpoint = await endpointFor(context, "POST");
  if (!endpoint) return refuse(404, "Not found");

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return refuse(413, "Request too large");

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return refuse(400, "Invalid JSON");
  }
  if (typeof rawBody !== "object" || rawBody === null || Array.isArray(rawBody)) return refuse(400, "Invalid request");

  // Frappe expects nested objects as JSON strings.
  const formatted: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(rawBody)) {
    formatted[key] = typeof val === "object" && val !== null ? JSON.stringify(val) : val;
  }

  return forward(`${BACKEND}${BASE_PATH}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(formatted),
  });
}
