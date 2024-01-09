import { CheckListItem } from './CheckListProps';

export const PRIMARY_ITEMS_NO_DEFAULT: CheckListItem[] = [
  {
    desription:
      'تهران، بزرگراه جلال آل احمد، زیر پل آزمایش، کوچه کوی نویسندگان، مجتمع کوی نویسندگان، بلوک۷، واحد ۱۵',
    value: 'address-1',
    id: 'address-1',
  },
  {
    desription:
      'تهران، میدان سبلان، خیابان سبلان، چهارراه نظام آباد، خیابان مدنی، خیابان محمودی، کوچه رجبی پور، کوچه باقری، کوچه ابوالحسنی، پلاک ۲',
    value: 'address-2',
    id: 'address-2',
  },
  {
    desription:
      'تهران، میدان سبلان، خیابان سبلان، چهارراه نظام آباد، خیابان مدنی، خیابان محمودی، کوچه رجبی پور، کوچه باقری، کوچه ابوالحسنی، پلاک ۲ تهران، میدان سبلان، خیابان سبلان، چهارراه نظام آباد، خیابان مدنی، خیابان محمودی، کوچه رجبی پور، کوچه باقری، کوچه ابوالحسنی، پلاک ۲',
    value: 'address-3',
    id: 'address-3',
  },
];

export const PRIMARY_ITEMS_WITH_DISABLED: CheckListItem[] = [
  {
    desription:
      'تهران، بزرگراه جلال آل احمد، زیر پل آزمایش، کوچه کوی نویسندگان، مجتمع کوی نویسندگان، بلوک۷، واحد ۱۵',
    value: 'address-1',
    id: 'address-1',
  },
  {
    desription:
      'تهران، میدان سبلان، خیابان سبلان، چهارراه نظام آباد، خیابان مدنی، خیابان محمودی، کوچه رجبی پور، کوچه باقری، کوچه ابوالحسنی، پلاک ۲',
    value: 'address-2',
    disabled: true,
    id: 'address-2',
  },
  {
    desription:
      'تهران، میدان سبلان، خیابان سبلان، چهارراه نظام آباد، خیابان مدنی، خیابان محمودی، کوچه رجبی پور، کوچه باقری، کوچه ابوالحسنی، پلاک ۲ تهران، میدان سبلان، خیابان سبلان، چهارراه نظام آباد، خیابان مدنی، خیابان محمودی، کوچه رجبی پور، کوچه باقری، کوچه ابوالحسنی، پلاک ۲',
    value: 'address-3',
    id: 'address-3',
  },
];

export const SECONDARY_ITEMS_NO_DEFAULT: CheckListItem[] = [
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۲ تا ۳ روز کاری می باشد. سفارشات ارسال فوری بصورت روزانه ارسال می‌‌گردد. (تحویل در بازه زمانی ۱۰ الی ۲۰)',
    title: 'پیک ویژه تهران',
    info: '۵۱,۰۰۰ تومان',
    value: 'address-1',
    src: '/images/delivery/bike.svg',
    id: 'address-1',
  },
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۲ تا ۴ روز کاری بوده که با توجه به محدوده جغرافیایی متغیر است. (تحویل در بازه زمانی ۱۰ الی ۱۷)',
    title: 'پست پیشتاز',
    info: '۱۰۱,۲۸۰ تومان',
    value: 'address-2',
    src: '/images/delivery/post.svg',
    id: 'address-2',
  },
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۳ تا ۵ روز کاری می باشد. مرسوله شما تا ارزش ۵۰ میلیون تومان به صورت کامل بیمه می‌شود.',
    value: 'address-3',
    title: 'اسپید',
    info: '۵۴,۶۷۰ تومان',
    src: '/images/delivery/speed.svg',
    id: 'address-3',
    subinfo: {
      text: 'بیمه پستی مرسوله:',
      price: 42000,
    },
  },
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۲ تا ۴ روز کاری بوده که با توجه به منطقه جغرافیایی متغیر است. مرسوله شما تا ارزش ۳۰ میلیون تومان به صورت کامل بیمه می‌شود.',
    value: 'address-4',
    title: 'تیپاکس',
    info: '۲۹۰,۷۲۰ تومان',
    src: '/images/delivery/tipax.svg',
    id: 'address-4',
  },
  {
    desription:
      'بعد از تماس توسط تیم مقداد آی تی، امکان تحویل حضوری میسر می باشد.تحویل درب انبار تهران می باشد.',
    value: 'address-5',
    title: 'تحویل حضوری (مخصوص کاربران تهران)',
    info: '۰ تومان',
    src: '/images/delivery/onsite.svg',
    id: 'address-5',
  },
];

export const SECONDARY_ITEMS_WITH_DISABLED: CheckListItem[] = [
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۲ تا ۳ روز کاری می باشد. سفارشات ارسال فوری بصورت روزانه ارسال می‌‌گردد. (تحویل در بازه زمانی ۱۰ الی ۲۰)',
    title: 'پیک ویژه تهران',
    info: '۵۱,۰۰۰ تومان',
    value: 'address-1',
    src: '/images/delivery/bike.svg',
    id: 'address-1',
  },
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۲ تا ۴ روز کاری بوده که با توجه به محدوده جغرافیایی متغیر است. (تحویل در بازه زمانی ۱۰ الی ۱۷)',
    title: 'پست پیشتاز',
    info: '۱۰۱,۲۸۰ تومان',
    value: 'address-2',
    src: '/images/delivery/post.svg',
    disabled: true,
    id: 'address-2',
  },

  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۳ تا ۵ روز کاری می باشد. مرسوله شما تا ارزش ۵۰ میلیون تومان به صورت کامل بیمه می‌شود.',
    value: 'address-3',
    title: 'اسپید',
    info: '۵۴,۶۷۰ تومان',
    src: '/images/delivery/speed.svg',
    id: 'address-3',
  },
  {
    desription:
      'زمان دریافت به صورت تقریبی بین ۲ تا ۴ روز کاری بوده که با توجه به منطقه جغرافیایی متغیر است. مرسوله شما تا ارزش ۳۰ میلیون تومان به صورت کامل بیمه می‌شود.',
    value: 'address-4',
    title: 'تیپاکس',
    info: '۲۹۰,۷۲۰ تومان',
    src: '/images/delivery/tipax.svg',
    disabled: true,
    id: 'address-4',
  },
  {
    desription:
      'بعد از تماس توسط تیم مقداد آی تی، امکان تحویل حضوری میسر می باشد.تحویل درب انبار تهران می باشد.',
    value: 'address-5',
    title: 'تحویل حضوری (مخصوص کاربران تهران)',
    info: '۰ تومان',
    src: '/images/delivery/onsite.svg',
    id: 'address-5',
  },
];
