import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);

    const updateDarkMode = (e) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', updateDarkMode);

    return () => {
      darkModeQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);
  return (
    <main>
      {
        isDarkMode ? <h1>Yes</h1> : <h1>No</h1>
      }
    </main>
  )
}
