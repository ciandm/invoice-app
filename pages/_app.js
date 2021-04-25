import { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme/theme';
import useDarkMode from '../src/hooks/useDarkMode';
import InvoiceContextProvider from '../src/contexts/InvoiceContext';

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

export default function App({ Component, pageProps }) {
  const [themeState, setThemeState] = useDarkMode();

  // function to toggle users theme
  const toggleTheme = () => {
    const dark = !themeState.dark;
    localStorage.setItem('darkMode', JSON.stringify(dark));
    setThemeState(prevState => ({
      ...prevState,
      dark,
    }));
  };

  // prevents switch on load
  if (!themeState.hasThemeLoaded) return null;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StyledThemeProvider
        theme={{
          // theme includes colours & media queries.
          constants: theme,
          darkMode: themeState.dark,
        }}
      >
        <ThemeContext.Provider
          value={{
            darkMode: themeState.dark,
            toggleTheme,
          }}
        >
          <InvoiceContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </InvoiceContextProvider>
        </ThemeContext.Provider>
      </StyledThemeProvider>
    </>
  );
}

export { useTheme };
