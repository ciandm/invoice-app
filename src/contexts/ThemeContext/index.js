import { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import useDarkMode from '../../hooks/useDarkMode';
import theme from '../../theme/theme';

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

function ThemeContextProvider({ children }) {
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
    <ThemeContext.Provider
      value={{
        darkMode: themeState.dark,
        toggleTheme,
      }}
    >
      <StyledThemeProvider
        theme={{
          // theme includes colours & media queries.
          constants: theme,
          darkMode: themeState.dark,
        }}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

export { useTheme };
