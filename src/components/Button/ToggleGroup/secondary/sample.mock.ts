import { ToggleItem } from './SecondaryToggleGroupProps';

const TOGGLE_ITEMS: ToggleItem[] = [
  {
    label: 'استفاده اداری',
    value: '1',
    ariaLabel: 'استفاده اداری',
    isDisabled: true,
    id: '1',
  },
  {
    label: 'استفاده خانگی',
    value: '2',
    ariaLabel: 'استفاده خانگی',
    icon: 'ic-sale',
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
