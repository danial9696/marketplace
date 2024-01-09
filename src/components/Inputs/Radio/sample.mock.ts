import { RadioItem } from './RadioProps';

const RADIO_ITEMS: RadioItem[] = [
  {
    label: '۱۸ ماه گارانتی دارای کد رجیستری',
    id: 'r1',
    value: 'r1',
  },
  {
    label: '۱۸ ماه گارانتی همراه با کد رجیستری (no active)',
    id: 'r2',
    value: 'r2',
  },
  {
    label: '9 ماه گارانتی همراه با کد رجیستری (no active)',
    id: 'r3',
    value: 'r3',
  },
  {
    label: 'بدون گارانتی',
    id: 'r4',
    value: 'r4',
    disabled: true,
  },
];

export default RADIO_ITEMS;
