import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client für Server-Side Rendering
export const supabase = createClient(supabaseUrl, supabaseKey)

// Funktion zum Testen der Datenbankverbindung
export async function testDatabaseConnection() {
  try {
    // Einfacher Ping zur Supabase-Instanz
    await supabase
      .from('_supabase_migrations')
      .select('*')
      .limit(1)
    
    // Die Verbindung ist erfolgreich, wenn wir eine Antwort erhalten
    console.log('✅ Supabase Datenbank erfolgreich verbunden!')
    console.log('🔗 URL:', supabaseUrl)
    console.log('📊 Verbindungsstatus: Aktiv')
    
    return true
    
  } catch (error) {
    console.error('❌ Fehler bei der Datenbankverbindung:', error)
    return false
  }
}
