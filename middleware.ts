import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/session";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("admin_session")?.value;
    console.log("Middleware checking path:", request.nextUrl.pathname);
    console.log("Cookies present:", request.cookies.getAll().map(c => c.name));
    console.log("Token found:", !!token);

    if (request.nextUrl.pathname.startsWith("/admin")) {
        const payload = token ? await verifyToken(token) : null;
        if (!payload) {
            console.log("No valid token for admin route, redirecting to login");
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (request.nextUrl.pathname === "/login") {
        const payload = token ? await verifyToken(token) : null;
        if (payload) {
            console.log("Valid token found on login page, redirecting to admin");
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/login"],
};
