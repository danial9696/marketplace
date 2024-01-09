import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './IconButton';

export default {
  title: 'Components/Buttons/Icon Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'افزودن نظر جدید',
  children: <i className="ic-plus" />,
};

export const Warning = Template.bind({});

Warning.args = {
  label: 'ثبت کد تخفیف',
  children: <i className="ic-plus-circle"></i>,
  status: 'warning',
};

export const Danger = Template.bind({});

Danger.args = {
  label: 'ثبت کد تخفیف',
  children: <i className="ic-minus"></i>,
  status: 'danger',
};

export const Success = Template.bind({});

Success.args = {
  label: 'ثبت کد تخفیف',
  children: <i className="ic-plus"></i>,
  status: 'success',
};

export const Detail = Template.bind({});

Detail.args = {
  label: 'ثبت کد تخفیف',
  children: <i className="ic-plus"></i>,
  status: 'detail',
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'ثبت کد تخفیف',
  children: <i className="ic-plus"></i>,
  status: 'primary',
};

export const Neutral = Template.bind({});

Neutral.args = {
  label: 'ثبت کد تخفیف',
  children: <i className="ic-plus-circle"></i>,
  status: 'neutral',
};

// * No Icon Mode
export const DefaultNoIcon = Template.bind({});
DefaultNoIcon.args = {
  label: 'ویرایش سبد',
};

export const WarningNoIcon = Template.bind({});
WarningNoIcon.args = {
  label: 'برو بالا',
  status: 'warning',
};

export const DangerNoIcon = Template.bind({});

DangerNoIcon.args = {
  label: 'ثبت کد تخفیف',
  status: 'danger',
};

export const SuccessNoIcon = Template.bind({});

SuccessNoIcon.args = {
  label: 'ثبت کد تخفیف',
  status: 'success',
};

export const DetailNoIcon = Template.bind({});

DetailNoIcon.args = {
  label: 'ثبت کد تخفیف',
  status: 'detail',
};

export const PrimaryNoIcon = Template.bind({});

PrimaryNoIcon.args = {
  label: 'ثبت کد تخفیف',
  status: 'primary',
};

export const NeutralNoIcon = Template.bind({});

NeutralNoIcon.args = {
  label: 'ثبت کد تخفیف',
  status: 'neutral',
};

// * Secondary: No border
export const Secondary = Template.bind({});

Secondary.args = {
  label: 'افزودن نظر جدید',
  children: <i className="ic-plus" />,
  secondary: true,
};
