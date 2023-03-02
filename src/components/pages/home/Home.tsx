import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '@/redux/auth/auth.actions';
import { selectUserIsLoggedIn } from '@/redux/auth/auth.selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userIsLoggedIn = useSelector(selectUserIsLoggedIn);

  const handleLogout = (): void => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!userIsLoggedIn) {
      router.push('/login');
    }
  }, [userIsLoggedIn, router]);

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Home;
