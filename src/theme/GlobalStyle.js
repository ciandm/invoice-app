import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Spartan', sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) =>
      theme.darkMode
        ? theme.constants.colors.mirage
        : theme.constants.colors.athensGray};
  }
  
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  *:focus {
    box-shadow: ${({ theme }) =>
      `0 0 0 1px ${theme.constants.colors.heliotrope}`} ;
    outline: none;
  }
`;

export default GlobalStyle;
