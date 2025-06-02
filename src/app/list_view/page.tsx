'use client';

import { useEffect, useState } from 'react';
import { get_flashcards } from '../api/api_get_flashcards';
import { Flashcard } from '../api/api_get_flashcards';

export default function Home() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_flashcards().then((data) => {
      setFlashcards(data);
      console.log('Flashcards:', data);
    }).catch((error) => {
        console.error('Error loading flashcards:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Willkommen zu Ihrem Next.js Projekt!
        </p>

        {loading && (
          <div className="mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Lade Flashcards...</p>
          </div>
        )}

        {!loading && flashcards.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Deine Flashcards ({flashcards.length})
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {flashcards.map((card, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {card.key_body || 'key_body'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {card.key_title || 'key_title'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}