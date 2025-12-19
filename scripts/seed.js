
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase URL or Key in environment variables.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    const demosPath = path.join(__dirname, 'demos.json');
    const demos = JSON.parse(fs.readFileSync(demosPath, 'utf8'));

    console.log(`Seeding ${demos.length} demos to Supabase...`);

    // Check if data exists
    const { count, error: countError } = await supabase
        .from('demos')
        .select('*', { count: 'exact', head: true });

    if (countError) {
        console.error("Error checking table:", countError);
        return;
    }

    if (count > 0) {
        console.log('Database already has data. Skipping seed.');
        return;
    }

    // Insert in batches
    const BATCH_SIZE = 50;
    for (let i = 0; i < demos.length; i += BATCH_SIZE) {
        const batch = demos.slice(i, i + BATCH_SIZE).map(d => ({
            title: d.title,
            image: d.image,
            link_light: d.linkLight,
            link_dark: d.linkDark,
            link_rtl: d.linkRTL,
            is_new: d.isNew,
            category: d.category || 'General',
        }));

        const { error } = await supabase.from('demos').insert(batch);
        if (error) {
            console.error("Error inserting batch:", error);
        } else {
            console.log(`Inserted batch ${i} to ${i + batch.length}`);
        }
    }

    console.log('Seeding completed.');
}

main();
