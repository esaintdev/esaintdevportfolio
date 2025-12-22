import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const getKey = () => {
    const secret = process.env.AUTH_SECRET;
    if (!secret || secret.length === 0) {
        throw new Error("AUTH_SECRET is not set or is empty");
    }
    return new TextEncoder().encode(secret);
};

export async function signToken(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(getKey());
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getKey(), {
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
        secure: false,
        maxAge: 60 * 60 * 24,
        path: "/",
        sameSite: "lax",
    });
    console.log("Cookie set in store: admin_session");
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    // Also try setting it to expire immediately as a fallback for some clients
    cookieStore.set("admin_session", "", { maxAge: 0, path: "/" });
}
