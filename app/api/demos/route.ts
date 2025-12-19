import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
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
        const body = await request.json();
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
