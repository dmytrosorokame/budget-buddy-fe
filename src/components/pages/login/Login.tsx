import { Box, Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';

import { IAuthDto } from '@/api/auth/auth.dto';
import useInput from '@/hooks/use-input';
import { login } from '@/redux/auth/auth.thunks';
import { useAppDispatch } from '@/redux/store';
import { emailValidator, passwordValidator } from '@/utils/validators';

import classes from './Login.module.scss';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    value: emailValue,
    isValid: emailIsValid,
    onChange: handleEmailChange,
    onBlur: handleEmailInputBlur,
    error: emailError,
    reset: resetEmail,
  } = useInput({ initialValue: '', validators: [emailValidator] });
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    onChange: handlePasswordChange,
    onBlur: handlePasswordInputBlur,
    error: passwordError,
    reset: resetPassword,
  } = useInput({ initialValue: '', validators: [passwordValidator] });

  const isValidForm = emailIsValid && passwordIsValid;

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const payload: IAuthDto = { email: emailValue, password: passwordValue };

    dispatch(login(payload));

    router.push('/');

    resetEmail();
    resetPassword();
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="h1" className={classes.title}>
          Budget<span>Buddy</span>
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailInputBlur}
            error={!!emailError}
            helperText={emailError}
            className={classes.input}
          />
          <TextField
            type="password"
            label="Password"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordInputBlur}
            error={!!passwordError}
            helperText={passwordError}
            className={classes.input}
          />
          <Typography variant="overline" className={classes.text}>
            Don't have an account? - <Link href="/sign-up">Sign up</Link>
          </Typography>
          <Button type="submit" disabled={!isValidForm} variant="contained" className={classes.button}>
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
