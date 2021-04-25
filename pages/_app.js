import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import InvoiceContextProvider from '../src/contexts/InvoiceContext';
import ThemeContextProvider from '../src/contexts/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeContextProvider>
        <InvoiceContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </InvoiceContextProvider>
      </ThemeContextProvider>
    </>
  );
}
