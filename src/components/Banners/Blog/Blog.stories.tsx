import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogBanner from './Blog';

export default {
  title: 'Components/Banners/Blog Banner',
  component: BlogBanner,
} as ComponentMeta<typeof BlogBanner>;

const Template: ComponentStory<typeof BlogBanner> = (args) => (
  <div
    className="py-4 px-xs-5 px-xxs-4 mx-auto w-25"
    style={{
      border: '1px solid #c8c8c8',
      borderRadius: '2px',
    }}
  >
    <BlogBanner {...args} />
  </div>
);

export const NormalTitle_16_9_Ratio = Template.bind({});

NormalTitle_16_9_Ratio.args = {
  title: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  alt: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  url: '/images/samples/tech1.png',
  to: 'https://marketplaceit.com',
  ratio: 16 / 9,
};

export const LongTitle_3_4_Ratio = Template.bind({});

LongTitle_3_4_Ratio.args = {
  title:
    'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل ',
  alt: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  url: '/images/samples/mobile.png',
  to: 'https://marketplaceit.com',
  ratio: 3 / 4,
};

const MobileTemplate: ComponentStory<typeof BlogBanner> = (args) => (
  <div className="o-container">
    <div
      className="py-4 px-xs-5 px-xxs-4"
      style={{
        border: '1px solid #c8c8c8',
        borderRadius: '2px',
      }}
    >
      <BlogBanner {...args} />
    </div>
  </div>
);

export const xxs_3_4Ratio = MobileTemplate.bind({});

xxs_3_4Ratio.parameters = {
  viewport: {
    defaultViewport: 'xxs',
  },
};

xxs_3_4Ratio.args = {
  title: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  alt: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  url: '/images/samples/mobile.png',
  to: 'https://marketplaceit.com',
  ratio: 4 / 3,
};

export const xs_3_4Ratio = MobileTemplate.bind({});

xs_3_4Ratio.parameters = {
  viewport: {
    defaultViewport: 'xs',
  },
};

xs_3_4Ratio.args = {
  title: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  alt: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  url: '/images/samples/mobile.png',
  to: 'https://marketplaceit.com',
  ratio: 4 / 3,
};

export const sm_3_4Ratio = MobileTemplate.bind({});

sm_3_4Ratio.parameters = {
  viewport: {
    defaultViewport: 'sm',
  },
};

sm_3_4Ratio.args = {
  title: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  alt: 'معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل',
  url: '/images/samples/mobile.png',
  to: 'https://marketplaceit.com',
  ratio: 4 / 3,
};
