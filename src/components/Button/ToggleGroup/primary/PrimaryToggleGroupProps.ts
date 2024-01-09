export interface ToggleItem {
  value: string;
  label?: string;
  ariaLabel?: string;
  icon?: string;
  isDisabled?: boolean;
  id: string;
}

export default interface PrimaryToggleGroupProps {
  type: 'single' | 'multiple';
  items: ToggleItem[];
  ariaLabel?: string;
  sendValue: (value: string | string[]) => void;
  defaultValue?: any;
}
