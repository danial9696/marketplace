import { ReactElement } from 'react';

export default interface SecondaryLabelProps {
  label: string;
  size?: 'sm' | 'md';
  class?: string;
  href: string;
  target?: string;
  children?: ReactElement;
}
