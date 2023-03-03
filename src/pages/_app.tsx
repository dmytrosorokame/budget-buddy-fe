import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import ConfirmModal from '@/components/generic/confirm-modal/ConfirmModal';
import AppProvider from '@/providers/app.provider';

import '@/styles/reset.scss';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <ToastContainer />
      <ConfirmModal />
    </AppProvider>
  );
};

export default App;
