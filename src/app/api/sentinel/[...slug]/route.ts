import { NextRequest, NextResponse } from "next/server";

const FRAPPE_CLOUD_URL = process.env.SENTINEL_BACKEND_URL || "https://dev-tridasa.frappe.cloud";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await context.params;
  const endpoint = slug.join("/");
  const searchParams = request.nextUrl.searchParams.toString();
  const targetUrl = `${FRAPPE_CLOUD_URL}/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.${endpoint}${searchParams ? `?${searchParams}` : ""}`;

  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await context.params;
  const endpoint = slug.join("/");
  const targetUrl = `${FRAPPE_CLOUD_URL}/api/method/sentinel_dpdp.sentinel_dpdp.api.v1.privacy.${endpoint}`;

  try {
    const body = await request.json();
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
