import type { AppProps } from 'next/app';

import AppProvider from '@/providers/app.provider';

import '@/styles/reset.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
