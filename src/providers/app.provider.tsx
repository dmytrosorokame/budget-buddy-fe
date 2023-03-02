import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import store from '@/redux/store';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
