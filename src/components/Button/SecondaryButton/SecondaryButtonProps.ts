import { ReactElement } from 'react';

export interface SecondaryButtonProps {
  label: string;
  class?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'submit' | 'reset' | 'button';
  children?: ReactElement;
  onClick: () => void;
}
