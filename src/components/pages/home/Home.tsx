import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { selectIsAuthenticated } from '@/redux/auth/auth.selectors';
import { useAppSelector } from '@/redux/store';

const Home: React.FC = () => {
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleLogout = (): void => {
    console.error('logout');
    router.reload();
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Home;
