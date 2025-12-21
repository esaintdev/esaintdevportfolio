import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { verifyToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id
    try {
        // Authenticate using custom session
        const cookieStore = await cookies();
        const token = cookieStore.get("admin_session")?.value;
        const payload = token ? await verifyToken(token) : null;

        if (!payload) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = createAdminClient();
        const { error } = await supabase
            .from('portfolios')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to delete portfolio" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id
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

        const { data: portfolio, error } = await supabase
            .from('portfolios')
            .update({
                title: formData.get('title') as string,
                image: imagePath,
                link_light: formData.get('link') as string,
                link_dark: formData.get('link') as string,
                link_rtl: "",
                // is_new handled purely by default or preserved? Assuming true for now based on previous logic, or strict update
                // The prompt asked to simplify form so we just follow the simplified inputs
                category: "Portfolio",
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(portfolio);
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to update portfolio" },
            { status: 500 }
        );
    }
}
