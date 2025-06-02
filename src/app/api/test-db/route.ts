import { NextRequest, NextResponse } from 'next/server'
import { testDatabaseConnection } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  console.log('🔄 Teste Supabase Datenbankverbindung...')
  
  const isConnected = await testDatabaseConnection()
  
  if (isConnected) {
    return NextResponse.json({ 
      success: true, 
      message: 'Datenbank erfolgreich verbunden!',
      timestamp: new Date().toISOString()
    })
  } else {
    return NextResponse.json({ 
      success: false, 
      message: 'Datenbankverbindung fehlgeschlagen',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
