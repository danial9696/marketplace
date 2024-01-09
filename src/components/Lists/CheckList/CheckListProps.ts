export interface CheckListItem {
  title?: string;
  desription: string;
  info?: string;
  link?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  id: string;
  src?: string;
  subinfo?: {
    text: string;
    price: number;
  };
}

export interface CheckListProps {
  title?: string;
  type: 'primary' | 'secondary';
  icon?: string;
  error?: boolean;
  defaultValue?: string;
  ariaLabel?: string;
  button?: {
    title: string;
    icon: string;
  };
  data: CheckListItem[];
  handleValueChange: (item: string) => void;
}
