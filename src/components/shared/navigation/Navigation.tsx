import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { selectIsAuthenticated } from '@/redux/auth/auth.selectors';
import { logout } from '@/redux/auth/auth.slice';
import { showModal } from '@/redux/confirmModal/confirmModal.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

interface INavigationProps {
  title?: string;
}

const Navigation: React.FC<INavigationProps> = ({ title = 'BuddyBudget' }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const dashboardClickHandler = (): void => {
    router.push('/');
  };

  const settingsClickHandler = (): void => {
    router.push('/settings');
  };

  const logoutHandler = (): void => {
    dispatch(logout());
    router.push('/login');

    toast.success('You logged out!');
  };

  const logoutButtonClickHandler = (): void => {
    dispatch(showModal({ title: 'Do you want logout?', okClickHandler: logoutHandler }));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" onClick={dashboardClickHandler}>
          Dashboard
        </Button>
        <Button color="inherit" onClick={settingsClickHandler}>
          Settings
        </Button>
        <Button color="inherit" onClick={logoutButtonClickHandler}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
