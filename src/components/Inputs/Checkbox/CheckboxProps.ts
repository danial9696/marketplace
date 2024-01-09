export default interface CheckBoxProps {
  disabled?: boolean;
  class?: string;
  type?: 'normal' | 'contained';
  status?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'detail';
  defaultChecked?: boolean;
  required?: boolean;
  label: string;
  id: string;
  onCheck: (check: boolean | 'indeterminate', id: string) => void;
}
