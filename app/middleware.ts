import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Allow access only if the user has a valid token
  if (!token && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except login page
export const config = {
  matcher: "/((?!login|_next|favicon.ico).*)",
};
