import { Box, Button, TextField, Typography } from '@mui/material';
import React, { FormEvent } from 'react';

import useInput from '@/hooks/use-input';
import { confirmPasswordValidator, emailValidator, passwordValidator } from '@/utils/validators';

import classes from './SignUp.module.scss';

const SignUp: React.FC = () => {
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

  const isValidForm = emailIsValid && passwordIsValid && confirmPasswordIsValid;

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="h1" className={classes.title}>
          BudgetBuddy
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
          <Button type="submit" disabled={!isValidForm} variant="contained" className={classes.button}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
