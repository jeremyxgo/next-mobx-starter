import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from '@utils/i18n';
import { createStore, StoreProvider } from '@utils/store';
import { createTheme, GlobalStyle } from '@utils/theme';

const App = ({ Component, pageProps }) => {
  const { initialStore, ...props } = pageProps;
  const store = createStore(initialStore);
  const theme = createTheme();
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...props} />
      </ThemeProvider>
    </StoreProvider>
  );
};

App.getInitialProps = async (appContext) => {
  const initialStore = createStore();
  const appProps = await NextApp.getInitialProps({
    ...appContext,
    ctx: {
      ...appContext.ctx,
      initialStore,
    },
  });
  return { ...appProps };
};

export default appWithTranslation(App);
