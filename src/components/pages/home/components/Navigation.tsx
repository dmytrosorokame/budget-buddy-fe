import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { selectIsAuthenticated } from '@/redux/auth/auth.selectors';
import { logout } from '@/redux/auth/auth.slice';
import { showModal } from '@/redux/confirmModal/confirmModal.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleLogout = (): void => {
    dispatch(logout());
    router.push('/login');
  };

  const logoutButtonClickHandler = (): void => {
    dispatch(showModal({ title: 'Do you want logout?', okClickHandler: handleLogout }));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit" onClick={logoutButtonClickHandler}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
