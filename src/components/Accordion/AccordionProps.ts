import { ReactElement } from 'react';

export interface AccordionItem {
  header: string;
  content: ReactElement;
  value: string;
  id: string;
}

export interface AccordionProps {
  header?: {
    title: string;
    text?: string;
  };
  type: 'single' | 'multiple';
  data: AccordionItem[];
  bordered: boolean;
  defaultValue: string | string[];
  isLoading: boolean;
  collapseAll: boolean;
}
