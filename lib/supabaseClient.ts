import { createClient } from "@supabase/supabase-js";

// توجه: برای اینکه Build در Vercel خراب نشود، اگر ENV خالی بود
// از مقدار ثابت (fallback) استفاده می‌کنیم.
// این کلیدها "publishable" هستند و محرمانه نیستند.

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://hdlnujimyovrzyadriv.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_tJSvDNiNvXv3Wk1D_Ur5A_41BVNHLg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
