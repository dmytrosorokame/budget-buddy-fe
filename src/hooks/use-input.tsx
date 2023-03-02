import { useState } from 'react';

import type { TValidator, TValidatorError } from '@/types/validators.types';

interface IUseInputOptions {
  initialValue?: string;
  validators?: TValidator[];
}

interface IUseInputReturnType {
  value: string;
  error: TValidatorError;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

type TUseInput = (data: IUseInputOptions) => IUseInputReturnType;

const useInput: TUseInput = ({ initialValue = '', validators = [] }) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<TValidatorError>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    setValue(newValue);

    const newError = validators
      .map((validator) => validator(newValue))
      .filter(Boolean)
      .join(', ');

    setError(newError);
  };

  const reset = (): void => {
    setValue('');
    setError(null);
  };

  return { value, error, onChange: handleChange, reset };
};

export default useInput;
