export interface DropdownItem {
  title: string;
  icon: string;
  id: string;
  detail?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  icon: string;
  loading?: boolean;
  items: DropdownItem[];
}
