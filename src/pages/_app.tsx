import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import AppProvider from '@/providers/app.provider';

import '@/styles/reset.scss';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AppProvider>
  );
};

export default App;
