import { NextResponse, type NextRequest } from "next/server";

const STATIC_OR_API_PATHS = new Set([
  "/favicon.ico",
  "/sitemap.xml",
  "/robots.txt",
  "/trusync-Oct-sitemap.xml",
]);

function shouldLowercase(pathname: string): boolean {
  if (pathname === "/api" || pathname.startsWith("/api/")) {
    return false;
  }
  return !STATIC_OR_API_PATHS.has(pathname);
}

export function middleware(request: NextRequest) {
  const rawHost =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    "";
  const hostname = rawHost.split(",")[0].trim().split(":")[0].toLowerCase();
  const { pathname } = request.nextUrl;
  const lowercasePath = shouldLowercase(pathname);

  // www -> apex (Google sees identical content on both hosts otherwise)
  if (hostname === "www.trusync.in") {
    const rootUrl = request.nextUrl.clone();
    rootUrl.protocol = "https:";
    rootUrl.hostname = "trusync.in";
    rootUrl.port = ""; // drop any inherited port (e.g. :3000) so we land on the default https port
    if (lowercasePath && pathname !== pathname.toLowerCase()) {
      rootUrl.pathname = pathname.toLowerCase();
    }
    return NextResponse.redirect(rootUrl, 308);
  }

  // Uppercase paths are served by the WP-proxy rewrites without redirect,
  // so enforce a single lowercase form.
  if (lowercasePath && pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js static/image internals so www redirects
  // also cover robots.txt, sitemap.xml, and other flat files.
  matcher: ["/((?!_next/static|_next/image).*)"],
};