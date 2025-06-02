'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [dbStatus, setDbStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [dbMessage, setDbMessage] = useState<string>('');

  useEffect(() => {
    // Teste Datenbankverbindung beim Laden der Seite
    const testConnection = async () => {
      try {
        const response = await fetch('/api/test-db');
        const result = await response.json();
        
        if (result.success) {
          setDbStatus('connected');
          setDbMessage(result.message);
          console.log('✅ Datenbankverbindung erfolgreich getestet');
        } else {
          setDbStatus('error');
          setDbMessage(result.message);
          console.error('❌ Datenbankverbindung fehlgeschlagen');
        }
      } catch (error) {
        setDbStatus('error');
        setDbMessage('Fehler beim Testen der Verbindung');
        console.error('❌ Fehler beim Testen der Datenbankverbindung:', error);
      }
    };

    testConnection();
  }, []);

  const getStatusIcon = () => {
    switch (dbStatus) {
      case 'loading': return '⏳';
      case 'connected': return '✅';
      case 'error': return '❌';
    }
  };

  const getStatusColor = () => {
    switch (dbStatus) {
      case 'loading': return 'text-yellow-600';
      case 'connected': return 'text-green-600';
      case 'error': return 'text-red-600';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Willkommen zu Ihrem Next.js Projekt!
        </p>
        
        {/* Datenbankstatus */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Datenbankverbindung
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">{getStatusIcon()}</span>
            <span className={`font-medium ${getStatusColor()}`}>
              {dbStatus === 'loading' ? 'Teste Verbindung...' : dbMessage}
            </span>
          </div>
          {dbStatus === 'connected' && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Supabase ist bereit für Ihre Anwendung!
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
