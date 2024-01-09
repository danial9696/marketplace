import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';
import { IconButton } from '@components/Button';
import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';
import ACOORDION_ITEMS from './sample.mock';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const TriggerButton = <IconButton label="ویرایش مشخصات"></IconButton>;

const DialogInputContent = (
  <form className="d-flex justify-content-between u-gap-4">
    <PrimaryInput width={180} required={false} name="name" label="نام" id="name" type="text" />

    <PrimaryInput
      width={180}
      required={false}
      name="family"
      label="نام خانوادگی"
      id="family"
      type="text"
    />
  </form>
);

const DialogContent = (
  <p className="u-p2 text-center" style={{ color: '#646262' }}>
    آیا از حذف این آدرس اطمینان دارید؟
  </p>
);

export const MainWithHeaderSingle = Template.bind({});

MainWithHeaderSingle.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  type: 'single',
  data: ACOORDION_ITEMS,
  bordered: true,
};

export const MainWithHeaderMultiple = Template.bind({});

MainWithHeaderMultiple.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  type: 'multiple',
  data: ACOORDION_ITEMS,
  bordered: true,
};

export const MainNoHeader = Template.bind({});

MainNoHeader.args = {
  data: ACOORDION_ITEMS,
  type: 'multiple',
  bordered: true,
};

export const NoBorderWithHeader = Template.bind({});

NoBorderWithHeader.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  data: ACOORDION_ITEMS,
  type: 'multiple',
  bordered: false,
};

export const NoBorderNoHeader = Template.bind({});

NoBorderNoHeader.args = {
  data: ACOORDION_ITEMS,
  type: 'multiple',
  bordered: false,
  collapseAll: true,
};

export const SingleValueDefaultOpen = Template.bind({});

SingleValueDefaultOpen.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  type: 'single',
  data: ACOORDION_ITEMS,
  bordered: true,
  defaultValue: 'item-1',
};

export const MultiValuesDefaultOpen = Template.bind({});

MultiValuesDefaultOpen.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  type: 'multiple',
  data: ACOORDION_ITEMS,
  bordered: true,
  defaultValue: ['item-2', 'item-5'],
};

export const CollapseAll = Template.bind({});

CollapseAll.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  type: 'multiple',
  data: ACOORDION_ITEMS,
  bordered: true,
  defaultValue: ['item-2', 'item-3', 'item-5'],
  collapseAll: true,
};

export const LoadingMode = Template.bind({});

LoadingMode.args = {
  header: {
    title: 'سوالات متداول',
    text: 'سوالات متداول در دسته سیستم‌های کامپیوتری / لپ‌تاپ ',
  },
  type: 'multiple',
  data: ACOORDION_ITEMS,
  bordered: true,
  isLoading: true,
};
