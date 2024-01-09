import { ReactElement } from 'react';

export interface ActionButtonProps {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'submit' | 'reset' | 'button';
  outline?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  children?: ReactElement;
  class?: string;
  loading?: boolean;
  onClick?: () => void;
}
