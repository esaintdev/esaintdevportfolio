import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { verifyToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const supabase = createAdminClient();
        const { data: portfolios, error } = await supabase
            .from('portfolios')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json(portfolios);
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch portfolios" },
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

        const supabase = createAdminClient();
        const formData = await request.formData();

        const file = formData.get('imageFile') as File;
        let imagePath = formData.get('image') as string;

        if (file && file.size > 0) {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const newFilePath = `portfolios/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio')
                .upload(newFilePath, file, {
                    contentType: file.type,
                    upsert: false
                });

            if (uploadError) throw uploadError;
            imagePath = newFilePath;
        }

        // Ensure proper types for insertion
        const { data: portfolio, error } = await supabase
            .from('portfolios')
            .insert([
                {
                    title: formData.get('title') as string,
                    image: imagePath,
                    link_light: formData.get('link') as string,
                    link_dark: formData.get('link') as string, // keeping consistent
                    link_rtl: "",
                    is_new: true,
                    category: "Portfolio",
                }
            ])
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(portfolio, { status: 201 });
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to create portfolio" },
            { status: 500 }
        );
    }
}
