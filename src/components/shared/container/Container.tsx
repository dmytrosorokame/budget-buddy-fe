import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import classes from './Container.module.scss';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box className={classes.container}>{children}</Box>;
};

export default Container;
