export async function detectSystemTheme() {
  let isDarkMode = false;

  if (typeof window !== 'undefined') {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    isDarkMode = darkModeQuery.matches;
  }

  return isDarkMode;
}