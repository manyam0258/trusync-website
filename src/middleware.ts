import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const rootUrl = request.nextUrl.clone();
  rootUrl.protocol = "https:";

  // www -> apex (Google sees identical content on both hosts otherwise)
  if (host === "www.trusync.in") {
    rootUrl.host = "trusync.in";
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
