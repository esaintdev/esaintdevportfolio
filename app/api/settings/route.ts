import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";
import { verifyToken } from "@/lib/session";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const supabase = createAdminClient();
        // user_id check not strictly needed for public settings, but good practice if we had multiple users.
        // For this portfolio, we just grab the first row.
        const { data, error } = await supabase
            .from('site_settings')
            .select('*')
            .single();

        if (error) {
            // If no settings exist yet, we might want to return default or empty
            if (error.code === 'PGRST116') { // JSON code for no rows
                return NextResponse.json({});
            }
            throw error;
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch settings" },
            { status: 500 }
        );
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
        const formData = await request.formData();

        // Helper to get string or undefined
        const getStr = (key: string) => {
            const val = formData.get(key);
            return val ? String(val) : null;
        };

        const updates: any = {
            profile_name: getStr('profile_name'),
            profile_role: getStr('profile_role'),
            profile_bio: getStr('profile_bio'),
            email: getStr('email'),
            phone: getStr('phone'),
            whatsapp: getStr('whatsapp'),
            social_github: getStr('social_github'),
            social_linkedin: getStr('social_linkedin'),
            social_dribbble: getStr('social_dribbble'),
            social_behance: getStr('social_behance'),
            social_facebook: getStr('social_facebook'),
            social_instagram: getStr('social_instagram'),
            updated_at: new Date().toISOString(),
        };

        // Handle CV File Upload
        const cvFile = formData.get('cvFile') as File;
        if (cvFile && cvFile.size > 0) {
            const fileExt = cvFile.name.split('.').pop();
            const fileName = `cv-${Date.now()}.${fileExt}`;
            const filePath = `cv/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio') // Using the same 'portfolio' bucket, maybe create 'cv' folder
                .upload(filePath, cvFile, {
                    contentType: cvFile.type,
                    upsert: false
                });

            if (uploadError) throw uploadError;

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('portfolio')
                .getPublicUrl(filePath);

            updates.cv_url = publicUrl;
        }

        // Upsert row with ID 1
        const { data, error } = await supabase
            .from('site_settings')
            .upsert({ id: 1, ...updates })
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        console.error("Supabase Error:", error);
        return NextResponse.json(
            { error: "Failed to save settings" },
            { status: 500 }
        );
    }
}
