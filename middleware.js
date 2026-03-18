import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Force lowercase paths
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
