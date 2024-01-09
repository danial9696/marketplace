import { ReactElement } from 'react';

export default interface StatusLabelProps {
  label: string;
  status: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'detail';
  children?: ReactElement;
  onClick?: () => void;
}
