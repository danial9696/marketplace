import { ContentsItem, TriggersItem } from './TabsProps';

const primaryTrigerrs: TriggersItem[] = [
  { title: 'قطعات کامپیوتری', value: 'item-1' },
  { title: 'موبایل و تبلت', value: 'item-2' },
  { title: 'گجت‌ها', value: 'item-3' },
  { title: 'تجهیزات اداری', value: 'item-4' },
  { title: 'تجهیزات شبکه', value: 'item-5' },
  { title: 'کنسول و لوازم بازی', value: 'item-6' },
  { title: 'دوربین', value: 'item-7' },
  { title: 'اسمبل آنلاین', value: 'item-8' },
];

const outlinedTrigerrs: TriggersItem[] = [
  { title: 'بررسی فنی', value: 'item-1', icon: 'bell' },
  { title: 'مشخصات', value: 'item-2', icon: 'flag' },
  { title: 'دیدگاه‌ها', value: 'item-3', icon: 'gift' },
  { title: 'سوالات متداول', value: 'item-4', icon: 'sale' },
];

const outlinedTrigerrsLongList: TriggersItem[] = [
  { title: 'بررسی فنی', value: 'item-1', icon: 'bell' },
  { title: 'مشخصات', value: 'item-2', icon: 'flag' },
  { title: 'دیدگاه‌ها', value: 'item-3', icon: 'gift' },
  { title: 'سوالات متداول', value: 'item-4', icon: 'sale' },
  { title: 'تجهیزات شبکه', value: 'item-5' },
  { title: 'کنسول و لوازم بازی', value: 'item-6' },
  { title: 'دوربین', value: 'item-7' },
  { title: 'اسمبل آنلاین', value: 'item-8' },
];

const contents: ContentsItem[] = [
  {
    value: 'item-1',
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, modi accusantium, quas deserunt
        quibusdam eveniet praesentium sed dolorum ducimus, veritatis cupiditate at voluptas dolore.
        Ipsa aspernatur voluptate sint repellat odit.
      </p>
    ),
    secondaryMobileItems: {
      title: 'بررسی فنی',
      icon: 'bell',
    },
  },
  {
    value: 'item-3',
    secondaryMobileItems: { title: 'دیدگاه‌ها', icon: 'gift' },
  },
  {
    value: 'item-2',
    content: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde laudantium beatae
        consequuntur excepturi? Repellat officiis quam quas iste ratione adipisci, facere, beatae
        odio id voluptate ducimus rem reiciendis quisquam possimus. Molestias ipsum consectetur, in
        cupiditate minus totam delectus recusandae pariatur iste minima, maxime sint accusantium
        aliquam quae hic veniam ab. Quis culpa, architecto quibusdam fuga voluptates tempora soluta
        quae ea! Maxime quod, neque ut odio velit iusto nulla soluta nobis modi atque ipsam
        blanditiis sunt cumque eveniet facere? Amet blanditiis quasi molestias eligendi qui magni
        beatae vero iure tempore quidem!
      </p>
    ),
    secondaryMobileItems: { title: 'مشخصات', icon: 'flag' },
  },
];

export const PRIMARY_TABS_ITEMS = {
  trigerrs: primaryTrigerrs,
  contents,
};

export const OUTLINED_TABS_ITEMS = {
  trigerrs: outlinedTrigerrs,
  contents,
};

export const OUTLINED_LONG_TABS_ITEMS = {
  trigerrs: outlinedTrigerrsLongList,
  contents,
};
