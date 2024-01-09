import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export default interface SecondaryInputProps {
  size?: 'sm' | 'lg';
  placeholder: string;
  id: string;
  type: 'text' | 'email' | 'number' | 'password';
  children: ReactNode | string;
  registerFn: UseFormRegisterReturn<string>;
  errors: any;
  onClickInputButton?: () => void;
}
