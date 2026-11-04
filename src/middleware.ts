import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const hostname = host.split(":")[0];

  // www -> apex (Google sees identical content on both hosts otherwise)
  if (hostname === "www.trusync.in") {
    const rootUrl = request.nextUrl.clone();
    rootUrl.protocol = "https:";
    rootUrl.hostname = "trusync.in";
    rootUrl.port = ""; // drop any inherited port (e.g. :3000) so we land on the default https port
    return NextResponse.redirect(rootUrl, 308);
  }

  // Uppercase paths are served by the WP-proxy rewrites without redirect,
  // so enforce a single lowercase form.
  const { pathname } = request.nextUrl;
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip API routes, Next internals, and crawlable flat files.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|trusync-Oct-sitemap.xml).*)",
  ],
};