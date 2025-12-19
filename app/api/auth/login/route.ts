import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { comparePassword } from "@/lib/password";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        console.log("Attempting login for:", email);

        // Use Supabase ONLY to fetch the user record (password hash)
        const supabase = await createClient();
        const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .single();

        if (error || !user) {
            console.error("User fetch error or not found:", error);
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Verify password hash
        const isValid = await comparePassword(password, user.password);
        if (!isValid) {
            console.error("Password mismatch");
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Create JWT Session
        await createSession({ id: user.id, email: user.email });
        console.log("Session created successfully");

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Login Check Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
