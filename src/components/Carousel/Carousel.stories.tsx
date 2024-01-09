import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from './Carousel';
import Blog from '@components/Banners/Blog';

export default {
  title: 'Components/Carousel/Single Carousel',
  component: Carousel,
  decorators: [
    (Carousel) => (
      <div className="o-container">
        <Carousel />
      </div>
    ),
  ],
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

const CarouselContent = [
  {
    content: (
      <Blog
        alt="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        title="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        url="/images/samples/tech1.png"
        to="https://marketplaceit.com"
        ratio={4 / 3}
      />
    ),
    id: '1',
  },
  {
    content: (
      <Blog
        alt="تمام نیازهای الترونیکت رو تو مقدادآی‌تی با چندتا کلیک تامین کن"
        title="تمام نیازهای الترونیکت رو تو مقدادآی‌تی با چندتا کلیک تامین کن"
        url="/images/samples/mobile.png"
        to="https://marketplaceit.com"
      />
    ),
    id: '2',
  },
  {
    content: (
      <Blog
        alt="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        title="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        url="/images/samples/Headphone.png"
        to="https://marketplaceit.com"
        ratio={4 / 3}
      />
    ),
    id: '3',
  },
  {
    content: (
      <Blog
        alt="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        title="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        url="/images/samples/sample-1.png"
        to="https://marketplaceit.com"
        ratio={4 / 3}
      />
    ),
    id: '3',
  },
  {
    content: (
      <Blog
        alt=".با ویژگی های جالب و جذاب، بزودی عرضه می شود Galaxy Buds Pro"
        title=".با ویژگی های جالب و جذاب، بزودی عرضه می شود Galaxy Buds Pro"
        url="/images/samples/mag.png"
        to="https://marketplaceit.com"
        ratio={4 / 3}
      />
    ),
    id: '4',
  },
  {
    content: (
      <Blog
        alt="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        title="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        url="/images/samples/camera.png"
        to="https://marketplaceit.com"
        ratio={4 / 3}
      />
    ),
    id: '5',
  },
  {
    content: (
      <Blog
        alt="معرفی بهترین نرم افزار انتقال تصویر دوربین مداربسته روی موبایل"
        title="شاید کالایی که نیاز داری تو این بخش باشه"
        url="/images/samples/guy.png"
        to="https://marketplaceit.com"
        ratio={4 / 3}
      />
    ),
    id: '6',
  },
];

export const DesktopMode = Template.bind({});

DesktopMode.args = {
  data: CarouselContent,
};

export const TabletMode = Template.bind({});

TabletMode.parameters = {
  viewport: {
    defaultViewport: 'lg',
  },
};

TabletMode.args = {
  data: CarouselContent,
};

export const MobileMode = Template.bind({});

MobileMode.parameters = {
  viewport: {
    defaultViewport: 'sm',
  },
};

MobileMode.args = {
  data: CarouselContent,
};
