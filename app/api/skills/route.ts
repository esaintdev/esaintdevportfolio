import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { verifyToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const supabase = createAdminClient();
        const { data, error } = await supabase
            .from('skills')
            .select('*')
            .order('proficiency', { ascending: false });

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch skills: ${(error as Error).message}` }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin_session")?.value;
        const payload = token ? await verifyToken(token) : null;

        if (!payload) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = createAdminClient();
        const body = await request.json();

        const { data, error } = await supabase
            .from('skills')
            .insert(body)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: `Failed to create skill: ${(error as Error).message}` }, { status: 500 });
    }
}
