import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { selectIsAuthenticated } from '@/redux/auth/auth.selectors';
import { logout } from '@/redux/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleLogout = (): void => {
    dispatch(logout());
    router.push('/login');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Home;
