import { useState } from 'react';

import type { TValidator, TValidatorError } from '@/types/validators.types';

interface IUseInputOptions {
  initialValue?: string;
  validators?: TValidator[];
}

interface IUseInputReturnType {
  value: string;
  isValid: boolean;
  error: TValidatorError;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  reset: () => void;
}

type TUseInput = (data: IUseInputOptions) => IUseInputReturnType;

const useInput: TUseInput = ({ initialValue = '', validators = [] }) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const validationError = validators
    .map((validator) => validator(value))
    .filter(Boolean)
    .join(', ');

  const isValid = !validationError;

  const error = !isValid && isTouched ? validationError : null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    setValue(newValue);
  };

  const handleBlur = (): void => {
    setIsTouched(true);
  };

  const reset = (): void => {
    setValue('');
    setIsTouched(false);
  };

  return { value, isValid, error, onChange: handleChange, onBlur: handleBlur, reset };
};

export default useInput;
