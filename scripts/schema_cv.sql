-- Create Experiences Table
CREATE TABLE IF NOT EXISTS experiences (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    duration TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
    category TEXT,
    icon_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies (Optional but good for security if using client-side calls, though we are using server actions mainly)
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Allow public read
CREATE POLICY "Allow public read experiences" ON experiences FOR SELECT USING (true);
CREATE POLICY "Allow public read skills" ON skills FOR SELECT USING (true);

-- Allow authenticated insert/update/delete (Admin)
CREATE POLICY "Allow admin all experiences" ON experiences FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin all skills" ON skills FOR ALL USING (auth.role() = 'authenticated');
