import { ReactElement } from 'react';

export interface IconButtonProps {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  secondary?: boolean;
  status?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'detail' | 'neutral';
  class?: string;
  btnType?: 'submit' | 'reset' | 'button';
  onClick?: (item?: any) => void;
  children?: ReactElement;
}
