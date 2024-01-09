export interface SelectValue {
  title: string;
  value: string;
  isDisabled?: boolean;
  id: string;
}

export interface CustomSelectProps {
  label: string;
  placeholder?: string;
  data: SelectValue[];
  canSearch: boolean;
  ariaLabel?: string;
  isLoading?: boolean;
  getSelectedValue: (value: string) => void;
}
