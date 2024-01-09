import { ComponentStory, ComponentMeta } from '@storybook/react';
import Puzzle from './Puzzle';

export default {
  title: 'Components/Banners/Puzzle Banner',
  component: Puzzle,
} as ComponentMeta<typeof Puzzle>;

const Template: ComponentStory<typeof Puzzle> = (args) => (
  <div
    style={{
      width: '324px',
      height: '225px',
    }}
    className="mx-auto"
  >
    <Puzzle {...args} />
  </div>
);

export const NormalTitle = Template.bind({});

NormalTitle.args = {
  title: 'بهترین دوربین‌های سلفی',
  alt: 'بهترین دوربین‌های سلفی',
  frontUrl: '/images/cards/card-1.png',
  backUrl: '/images/samples/mobile.png',
  to: 'https://marketplaceit.com',
};

export const LongTitle = Template.bind({});

LongTitle.args = {
  title:
    'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل ',
  alt: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  frontUrl: '/images/samples/mobile.png',
  backUrl: '/images/cards/card-1.png',
  to: 'https://marketplaceit.com',
};
