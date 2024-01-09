import { ReactElement } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FieldErrors = {
  [key: string]: any;
};

export default interface ContactInputProps {
  variant?: 'normal' | 'outline';
  placeholder?: string;
  id: string;
  class?: string;
  type?: 'text' | 'email' | 'number';
  buttonType?: 'submit' | 'button';
  iconAccessibilityLabel: string;
  children: ReactElement | string;
  state: {
    mode: 'success' | 'error' | 'loading' | 'default';
    text: string;
  };
  registerFn: UseFormRegisterReturn<string>;
  errors: FieldErrors;
}
