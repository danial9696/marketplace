import { ToggleItem } from './PrimaryToggleGroupProps';

const TOGGLE_ITEMS: ToggleItem[] = [
  {
    label: 'استفاده اداری',
    value: '1',
    ariaLabel: 'استفاده اداری',
    id: '1',
  },
  {
    label: 'استفاده خانگی',
    value: '2',
    ariaLabel: 'استفاده خانگی',
    icon: 'ic-sale',
    isDisabled: true,
    id: '2',
  },
  {
    label: 'لپ تاپ اقتصادی',
    value: '3',
    ariaLabel: 'لپ تاپ اقتصادی',
    id: '3',
  },
  {
    value: '4',
    ariaLabel: 'لپ تاپ اقتصادی',
    icon: 'ic-credit',
    id: '4',
  },
];

export default TOGGLE_ITEMS;
