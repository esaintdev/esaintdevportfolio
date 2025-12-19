-- Create a simple users table in the public schema
create table if not exists public.users (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  password text not null, -- This will store the bcrypt hash
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.users enable row level security;

-- Policy: Allow Anon Key (public) to SELECT (needed for login to verify password)
create policy "Allow public read access" on public.users for select using (true);

-- Policy: Allow Anon Key (public) to INSERT/UPDATE (needed for seeding/admin updates)
-- WARN: In a real production app with Service Role, you would restrict this.
-- Since we are using Anon Key only, we must allow this for the app to function as requested.
create policy "Allow public write access" on public.users for insert with check (true);
create policy "Allow public update access" on public.users for update using (true);
create policy "Allow public delete access" on public.users for delete using (true);
