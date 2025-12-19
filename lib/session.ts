import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.AUTH_SECRET || "your-secret-key-change-this";
const key = new TextEncoder().encode(SECRET_KEY);

export async function signToken(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(key);
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}

export async function createSession(payload: any) {
    const token = await signToken(payload);
    const cookieStore = await cookies();

    cookieStore.set("admin_session", token, {
        httpOnly: true,
        secure: false, // process.env.NODE_ENV === "production", // RELAXED FOR DEBUGGING
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
        sameSite: "lax",
    });
    console.log("Cookie set in store: admin_session");
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
}
