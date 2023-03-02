import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '@/redux/auth/auth.actions';
import { selectUserIsLogin } from '@/redux/auth/auth.selectors';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const userIsLogin = useSelector(selectUserIsLogin);

  const handleLogin = (): void => {
    dispatch(login());
  };

  const handleLogout = (): void => {
    dispatch(logout());
  };

  return (
    <div>
      {userIsLogin ? <Button onClick={handleLogout}>Logout</Button> : <Button onClick={handleLogin}>Login</Button>}
    </div>
  );
};

export default Login;
