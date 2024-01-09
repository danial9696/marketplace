import { ReactElement } from 'react';

export interface PopoverProps {
  trigger: ReactElement;
  children: ReactElement;
  class?: string;
  side: 'top' | 'right' | 'bottom' | 'left';
}
