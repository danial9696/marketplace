import { ReactElement } from 'react';

export default interface ToastProps {
  title: string;
  children: ReactElement;
  open: boolean;
  openHandler: (open: boolean) => void;
  ariaLabel?: string;
  description: string;
  status: 'dark' | 'success' | 'danger' | 'warning' | 'info' | 'detail';
  direction: 'top' | 'btl' | 'btr' | 'bottom';
  action: {
    title: string;
    altText?: string;
    onClick: () => void;
  };
}
