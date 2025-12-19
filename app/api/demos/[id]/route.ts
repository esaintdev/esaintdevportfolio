import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const body = await request.json();

        const { data: demo, error } = await supabase
            .from('demos')
            .update({
                title: body.title,
                image: body.image,
                link_light: body.linkLight,
                link_dark: body.linkDark,
                link_rtl: body.linkRTL,
                is_new: body.isNew,
                category: body.category,
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(demo);
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to update demo" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const { error } = await supabase
            .from('demos')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ message: "Demo deleted" });
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to delete demo" },
            { status: 500 }
        );
    }
}
