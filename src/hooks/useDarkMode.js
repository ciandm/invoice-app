import { useState, useEffect } from 'react';

function useDarkMode() {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false,
  });

  useEffect(() => {
    let userPrefersDark = true;
    // if 'prefers-color-scheme: dark' is not supported
    if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
      if (
        localStorage.getItem('darkMode') &&
        localStorage.getItem('darkMode') === true
      ) {
        return;
      }
      userPrefersDark = false;
    }

    setThemeState({
      dark: userPrefersDark,
      hasThemeLoaded: true,
    });
  }, []);

  return [themeState, setThemeState];
}

export default useDarkMode;
