import '@/styles/globals.css'
import { StoreProvider } from '@/themecontext/store';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    <StoreProvider value={{theme,setTheme}}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
