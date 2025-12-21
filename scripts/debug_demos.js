
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

// Reload env vars from root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkDemos() {
    console.log("Checking last 5 portfolios...");
    const { data, error } = await supabase
        .from('portfolios')
        .select('id, title, image')
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error("Error fetching demos:", error);
    } else {
        console.log("Found demos:");
        data.forEach(d => console.log(d));
    }

    console.log("\nChecking Storage 'portfolio' bucket...");
    const { data: files, error: storageError } = await supabase
        .storage
        .from('portfolio')
        .list('demos');

    if (storageError) {
        console.error("Storage Error:", storageError);
    } else {
        console.log("Files in portfolio/demos:", files);
        if (files.length > 0) {
            const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/demos/${files[0].name}`;
            console.log("\nTesting URL:", publicUrl);

            try {
                const res = await fetch(publicUrl);
                console.log("Fetch Status:", res.status);
                if (!res.ok) {
                    const text = await res.text();
                    console.log("Error Body:", text);
                }
            } catch (err) {
                console.error("Fetch failed:", err);
            }
        }
    }
}

checkDemos();
