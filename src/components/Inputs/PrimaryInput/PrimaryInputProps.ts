import { ReactNode } from 'react';

export default interface PrimaryInputProps {
  placeholder?: string;
  class?: string;
  width?: number;
  size?: 'sm' | 'md';
  required: boolean;
  name: any;
  label: string;
  id: string;
  type: string;
  children?: ReactNode;
}
