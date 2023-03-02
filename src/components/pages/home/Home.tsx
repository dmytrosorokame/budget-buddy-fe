import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { selectUserIsLoggedIn } from '@/redux/auth/auth.selectors';
import { useAppSelector } from '@/redux/store';

const Home: React.FC = () => {
  const router = useRouter();

  const userIsLoggedIn = useAppSelector(selectUserIsLoggedIn);

  const handleLogout = (): void => {
    console.error('logout');
  };

  useEffect(() => {
    if (!userIsLoggedIn) {
      router.push('/login');
    }
  }, [userIsLoggedIn, router]);

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Home;
