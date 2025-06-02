'use server'

import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function testDatabaseConnection() : Promise<boolean> {
    console.log('🔄 Teste Supabase Datenbankverbindung...');
    try {
        console.log('🔗 Supabase URL:', supabaseUrl);
        getServerClient().then(() => {
            console.log('✅ Supabase Client erfolgreich erstellt!');
        });
       
    } catch (error) { 
        console.error('❌ Fehler beim Erstellen des Supabase Clients:', error);
        return false;
    }

    return true;
}

export async function getServerClient() : Promise<SupabaseClient>{
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('🔗 Supabase Client erstellt:', supabase);
    return supabase;
}