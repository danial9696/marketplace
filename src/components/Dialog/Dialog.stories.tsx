import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';
import { IconButton } from '@components/Button';
import PrimaryInput from '../Inputs/PrimaryInput/PrimaryInput';

export default {
  title: 'Components/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

const TriggerButton = <IconButton label="ویرایش مشخصات" />;

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

export const OneButton = Template.bind({});

OneButton.args = {
  title: 'مشخصات',
  trigger: TriggerButton,
  children: DialogContent,
  confirm: {
    text: 'ثبت اطلاعات',
    onConfirm: () => {
      alert('Done');
    },
  },
};

export const TwoButton = Template.bind({});

TwoButton.args = {
  title: 'مشخصات',
  children: DialogContent,
  centerFooter: true,
  trigger: TriggerButton,
  confirm: {
    text: 'ثبت اطلاعات',
  },
  cancel: { text: 'انصراف' },
};

export const ThreeButtonWithInput = Template.bind({});

ThreeButtonWithInput.args = {
  title: 'مشخصات',
  trigger: TriggerButton,
  children: DialogInputContent,
  confirm: {
    text: 'ثبت اطلاعات',
    disabled: true,
  },
  cancel: { text: 'انصراف' },
  custom: { text: 'حذف' },
};

export const CenterMode = Template.bind({});

CenterMode.args = {
  title: 'مشخصات',
  centerFooter: true,
  trigger: TriggerButton,
  children: DialogInputContent,
  confirm: {
    text: 'ثبت اطلاعات',
  },
};

export const NoBorder = Template.bind({});

NoBorder.args = {
  centerFooter: true,
  trigger: TriggerButton,
  children: DialogInputContent,
  confirm: {
    text: 'ثبت اطلاعات',
  },
};

export const Loading = Template.bind({});

Loading.args = {
  trigger: TriggerButton,
  loading: true,
};
