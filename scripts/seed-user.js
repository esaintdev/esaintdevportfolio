const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// Load environment variables from .env
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
    const envConfig = dotenv.parse(fs.readFileSync(envPath));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// We need SERVICE ROLE KEY to bypass RLS and create tables if possible (though creating tables via JS client is limited usually, primarily we insert data)
// NOTE: Creating tables via JS client is NOT possible unless using specific PG adapters or RPC.
// Assuming the user needs to run the SQL manually OR we use this script to INSERT the user if the table exists.
// We will try to insert the user. If table doesn't exist, we'll error out and tell the user to run SQL.

const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Credentials missing.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const args = process.argv.slice(2);
const email = args[0] || 'esaint@esaint.com';
const password = args[1] || 'esaint275';

async function seedUser() {
    console.log(`Seeding custom user: ${email}...`);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user exists
    const { data: existing } = await supabase.from('users').select('*').eq('email', email).single();

    if (existing) {
        console.log('User already exists. Updating password...');
        const { error } = await supabase.from('users').update({ password: hashedPassword }).eq('email', email);
        if (error) console.error('Error updating:', error);
        else console.log('Password updated.');
    } else {
        const { error } = await supabase.from('users').insert([{ email, password: hashedPassword }]);
        if (error) {
            console.error('Error inserting user:', error.message);
            console.error('HINT: Did you create the "users" table? Run the SQL in scripts/create_users_table.sql in your Supabase SQL Editor.');
        } else {
            console.log('User created successfully in "users" table.');
        }
    }
}

seedUser();
