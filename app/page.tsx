import LandingPage from "../components/LandingPage";
import { createAdminClient } from "@/utils/supabase/admin";

export const revalidate = 0; // Disable static caching for this page to ensure updates are seen immediately

async function getSettings() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from('site_settings')
    .select('*')
    .single();
  return data || {};
}

export default async function Home() {
  const settings = await getSettings();

  return (
    <main>
      <LandingPage settings={settings} />
    </main>
  );
}
