import { ReactElement } from 'react';

export interface DialogProps {
  title?: string;
  trigger?: ReactElement;
  children: ReactElement;
  loading?: boolean;
  centerFooter?: boolean;
  /**
   * If we want to programitcally control the open and close of components
   * we use the open handler with open state instead of close trigger
   * */
  openHandler?: (open: boolean) => void;
  open?: boolean;
  confirm?: {
    text: string;
    onConfirm?: (item?: any) => void;
    disabled?: boolean;
  };
  cancel?: {
    text: string;
    onCancel?: () => void;
    disabled?: boolean;
  };
  custom?: {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
  };
}
