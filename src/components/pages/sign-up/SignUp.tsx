import { Box, Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect } from 'react';

import { IAuthDto } from '@/api/auth/auth.dto';
import useInput from '@/hooks/use-input';
import { selectUserIsLoggedIn } from '@/redux/auth/auth.selectors';
import { singUp } from '@/redux/auth/auth.thunks';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { confirmPasswordValidator, emailValidator, passwordValidator } from '@/utils/validators';

import classes from './SignUp.module.scss';

const SignUp: React.FC = () => {
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
  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    onChange: handleConfirmPasswordChange,
    onBlur: handleConfirmPasswordInputBlur,
    error: confirmPasswordError,
    reset: resetConfirmPassword,
  } = useInput({ initialValue: '', validators: [confirmPasswordValidator.bind(this, passwordValue)] });

  const userIsLoggedIn = useAppSelector(selectUserIsLoggedIn);

  const isValidForm = emailIsValid && passwordIsValid && confirmPasswordIsValid;

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const payload: IAuthDto = { email: emailValue, password: passwordValue };

    dispatch(singUp(payload));

    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  useEffect(() => {
    if (userIsLoggedIn) {
      router.push('/');
    }
  }, [userIsLoggedIn, router]);

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
          <TextField
            type="password"
            label="Confirm password"
            value={confirmPasswordValue}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordInputBlur}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
            className={classes.input}
          />
          <Typography variant="overline" className={classes.text}>
            Already have an account? - <Link href="/login">Login</Link>
          </Typography>
          <Button type="submit" disabled={!isValidForm} variant="contained" className={classes.button}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
