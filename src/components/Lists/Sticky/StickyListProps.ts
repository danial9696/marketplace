import { ReactElement } from 'react';

export interface StickyListItem {
  id: string;
  title: string;
  icon?: string;
}

export interface StickyListContent {
  id: string;
  title: string;
  icon?: string;
  data?: ReactElement;
}

export default interface StickyListProps {
  items: StickyListItem[];
  contents: StickyListContent[];
}
