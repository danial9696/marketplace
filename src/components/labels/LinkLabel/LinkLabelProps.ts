import { ReactElement } from 'react';

export default interface LinkLabelProps {
  label: string;
  href: string;
  class?: string;
  target?: string;
  size?: 'xs' | 'sm';
  children?: ReactElement;
}
