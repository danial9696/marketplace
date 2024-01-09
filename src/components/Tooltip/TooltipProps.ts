import { ReactElement } from 'react';

export default interface TooltipProps {
  children: ReactElement;
  trigger: ReactElement;
  side: 'top' | 'right' | 'bottom' | 'left';
}
