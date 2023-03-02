import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regex.constant';
import {
  CONFIRM_PASSWORD_VALIDATION_ERROR,
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
} from '@/constants/validators.constant';

import { TValidator } from './../types/validators.types';

export const emailValidator: TValidator = (value) => {
  const isValid = EMAIL_REGEX.test(value);

  if (!isValid) {
    return EMAIL_VALIDATION_ERROR;
  }

  return null;
};

export const passwordValidator: TValidator = (value) => {
  const isValid = PASSWORD_REGEX.test(value);

  if (!isValid) {
    return PASSWORD_VALIDATION_ERROR;
  }

  return null;
};

export const confirmPasswordValidator: TValidator = (firstValue, secondValue) => {
  const isValid = firstValue === secondValue;

  if (!isValid) {
    return CONFIRM_PASSWORD_VALIDATION_ERROR;
  }

  return null;
};
