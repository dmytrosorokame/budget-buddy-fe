import { Box, Button, Grid, TextField } from '@mui/material';
import React, { FormEvent } from 'react';

import useInput from '@/hooks/use-input';
import { confirmPasswordValidator, emailValidator, passwordValidator } from '@/utils/validators';

const SignUp: React.FC = () => {
  const {
    value: emailValue,
    onChange: handleEmailChange,
    error: emailError,
    reset: resetEmail,
  } = useInput({ initialValue: '', validators: [emailValidator] });
  const {
    value: passwordValue,
    onChange: handlePasswordChange,
    error: passwordError,
    reset: resetPassword,
  } = useInput({ initialValue: '', validators: [passwordValidator] });
  const {
    value: confirmPasswordValue,
    onChange: handleConfirmPasswordChange,
    error: confirmPasswordError,
    reset: resetConfirmPassword,
  } = useInput({ initialValue: '', validators: [confirmPasswordValidator.bind(this, passwordValue)] });

  const isValidForm = !emailError && !passwordError && !confirmPasswordError;

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  return (
    <Grid container>
      <Grid item>
        <Box
          component="form"
          sx={{
            display: 'flex',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            value={emailValue}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            type="password"
            label="Password"
            value={passwordValue}
            onChange={handlePasswordChange}
            error={!!passwordError}
            helperText={passwordError}
          />
          <TextField
            type="password"
            label="Confirm password"
            value={confirmPasswordValue}
            onChange={handleConfirmPasswordChange}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
          />
          <Button type="submit" disabled={!isValidForm} variant="contained">
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
