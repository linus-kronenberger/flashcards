'use server'

import { getServerClient } from '@/lib/supabase'

export interface Flashcard { 
  id : string;
  key_title : string;
  key_body: string;
  value_title: string;
  value_body: string;
}

export async function get_flashcards(): Promise<Flashcard[]> {
  console.log('🔄 verbinde mit Supabase (api_get_flashcards)... ');

  const supabase = await getServerClient();

  if (supabase) {
    const { data, error } = await supabase
      .from('flashcard')
      .select('*');

    if (error) {
      throw new Error(`Fehler beim Abrufen der Flashcards: ${error.message}`);
    }

    data?.forEach((flashcard) => {
      console.log(`Flashcard ID: ${flashcard.id}, Title: ${flashcard.key_title}, Body: ${flashcard.key_body}`);
    });

    return data.map((flashcard) => ({
      id: flashcard.id,
      key_title: flashcard.key_title,
      key_body: flashcard.key_body,
      value_title: flashcard.value_title,
      value_body: flashcard.value_body,
    }));
  }

  return [];
}