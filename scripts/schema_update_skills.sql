-- Add icon_url column to skills table if it doesn't exist
ALTER TABLE skills 
ADD COLUMN IF NOT EXISTS icon_url TEXT;

-- Verify the column was added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'skills' AND column_name = 'icon_url';
