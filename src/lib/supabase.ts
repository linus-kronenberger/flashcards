'use server'

import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!

export async function getServerClient() : Promise<SupabaseClient>{
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('🔗 Supabase Client erstellt:', supabase);
    return supabase;
}