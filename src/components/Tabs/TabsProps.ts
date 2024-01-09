import { ReactElement } from 'react';

export interface TriggersItem {
  title: string;
  icon?: string;
  value: string;
}

export interface ContentsItem {
  content?: ReactElement;
  value: string;
  // ! Items for secondary type, shown only in mobile with sticky list
  secondaryMobileItems?: {
    icon?: string;
    title?: string;
  };
}

export interface TabsProps {
  type: 'primary' | 'secondary' | 'icon';
  bordered?: boolean;
  ariaLabel?: string;
  defaultValue?: string;
  header: {
    title: string;
    link?: {
      title: string;
      href: string;
    };
  };
  trigerrs: TriggersItem[];
  contents: ContentsItem[];
}
