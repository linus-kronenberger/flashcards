'use client'

import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Login-Logik stehen
    
    // Navigation zur list_view Seite
    router.push('/list_view');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Login
        </h1>
          <form onSubmit={handleLogin}>
            <input placeholder="E-Mail"></input>
            <input placeholder="Password"></input>
            <button type="submit">Login</button>
          </form>
      </main>
    </div>
  );
}