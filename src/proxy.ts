import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();

  // www -> apex, so search engines see one host.
  if (host === "www.trusync.in") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "trusync.in";
    url.port = "";
    return NextResponse.redirect(url, 308);
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
  // Skip API routes, Next internals and any path with a file extension.
  // Static files such as /assets/crm/integration.PNG keep their exact case.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
