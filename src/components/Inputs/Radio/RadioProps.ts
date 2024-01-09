export interface RadioItem {
  label: string;
  value: string;
  id: string;
  disabled?: boolean;
}

export interface RadioProps {
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  data: RadioItem[];
  defaultValue?: string;
  handlevalueChange: (value: string) => void;
}
