import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { verifyToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin_session")?.value;
        const payload = token ? await verifyToken(token) : null;

        if (!payload) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = createAdminClient();
        const formData = await request.formData();
        const { id } = await params;

        const name = formData.get('name') as string;
        const proficiency = formData.get('proficiency');
        const category = formData.get('category') as string;
        const iconFile = formData.get('icon') as File | null;

        const updates: any = {
            name,
            proficiency: parseInt(proficiency as string),
            category,
        };

        // Handle Icon Upload if provided
        if (iconFile && iconFile.size > 0) {
            const fileExt = iconFile.name.split('.').pop();
            const fileName = `skill-${Date.now()}.${fileExt}`;
            const filePath = `skills/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio')
                .upload(filePath, iconFile, {
                    contentType: iconFile.type,
                    upsert: false
                });

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('portfolio')
                .getPublicUrl(filePath);

            updates.icon_url = publicUrl;
        }

        const { data, error } = await supabase
            .from('skills')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: `Failed to update skill: ${(error as Error).message}` }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("admin_session")?.value;
        const payload = token ? await verifyToken(token) : null;

        if (!payload) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = createAdminClient();
        const { id } = await params;

        const { error } = await supabase
            .from('skills')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: `Failed to delete skill: ${(error as Error).message}` }, { status: 500 });
    }
}
