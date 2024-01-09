export interface AccessItem {
  icon: string;
  title: string;
  target: string;
  disabled?: boolean;
  ariaLabel?: string;
  id: string;
  // onClick: (target: string) => void;
  side: 'top' | 'right' | 'bottom' | 'left';
}

export interface AccessProps {
  orientaion: 'ver' | 'hor';
  items: AccessItem[];
  side: 'top' | 'right' | 'bottom' | 'left';
  tooltipDelay: number;
}
