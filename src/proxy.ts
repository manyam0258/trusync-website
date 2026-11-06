import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();

  // www -> apex, so search engines see one host.
  if (host === "www.trusync.in") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "trusync.in";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  // The MCP endpoint hangs on an empty or malformed body, which would tie up a connection.
  // Refuse those up front with a proper JSON-RPC error.
  if (request.nextUrl.pathname === "/api/mcp") {
    if (request.method !== "POST") return NextResponse.next();
    const jsonRpc = (status: number, code: number, message: string) =>
      NextResponse.json({ jsonrpc: "2.0", id: null, error: { code, message } }, { status });
    if (Number(request.headers.get("content-length") ?? 0) > 1_000_000) return jsonRpc(413, -32600, "Request too large");
    const text = await request.clone().text();
    try {
      JSON.parse(text);
    } catch {
      return jsonRpc(400, -32700, "Parse error: the body must be valid JSON");
    }
    return NextResponse.next();
  }

  // One lowercase form per page URL.
  const { pathname } = request.nextUrl;
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip API routes (except the MCP guard above), Next internals and any path with a file extension.
  // Static files such as /assets/crm/integration.PNG keep their exact case.
  matcher: ["/((?!api|_next|.*\\..*).*)", "/api/mcp"],
};
