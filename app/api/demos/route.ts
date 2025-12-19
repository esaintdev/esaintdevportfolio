import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { verifyToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: demos, error } = await supabase
            .from('demos')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json(demos);
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch demos" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        // Authenticate using custom session
        const cookieStore = await cookies();
        const token = cookieStore.get("admin_session")?.value;
        const payload = token ? await verifyToken(token) : null;

        if (!payload) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = await createClient();
        const body = await request.json();

        // Ensure proper types for insertion
        const { data: demo, error } = await supabase
            .from('demos')
            .insert([
                {
                    title: body.title,
                    image: body.image,
                    link_light: body.linkLight,
                    link_dark: body.linkDark,
                    link_rtl: body.linkRTL,
                    is_new: body.isNew || false,
                    category: body.category,
                }
            ])
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(demo, { status: 201 });
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to create demo" },
            { status: 500 }
        );
    }
}
