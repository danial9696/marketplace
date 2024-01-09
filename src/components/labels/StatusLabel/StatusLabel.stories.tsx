import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatusLabel from './StatusLabel';

export default {
  title: 'Components/Labels/Status Label',
  component: StatusLabel,
} as ComponentMeta<typeof StatusLabel>;

const Template: ComponentStory<typeof StatusLabel> = (args) => <StatusLabel {...args} />;

export const PrimaryStatus = Template.bind({});

PrimaryStatus.args = {
  label: 'مقداد آی تی',
  status: 'primary',
};

export const SuccessStatus = Template.bind({});

SuccessStatus.args = {
  label: 'بله پیدا کردم',
  status: 'success',
};

export const DangerStatus = Template.bind({});

DangerStatus.args = {
  label: 'خیر متاسفانه',
  status: 'danger',
};

export const WarningStatus = Template.bind({});

WarningStatus.args = {
  label: 'بد',
  status: 'warning',
};

export const InfoStatus = Template.bind({});

InfoStatus.args = {
  label: 'عالی',
  status: 'info',
};

export const DetailStatus = Template.bind({});

DetailStatus.args = {
  label: 'به من خبر بده',
  status: 'detail',
};

export const PrimaryStatusWithIcon = Template.bind({});

PrimaryStatusWithIcon.args = {
  label: 'مقداد آی تی',
  status: 'primary',
  children: <i className="ic-eyes"></i>,
};

export const SuccesStatusWithIcon = Template.bind({});

SuccesStatusWithIcon.args = {
  label: 'بله پیدا کردم',
  status: 'success',
  children: <i className="ic-eyes"></i>,
};

export const DangerStatusWithIcon = Template.bind({});

DangerStatusWithIcon.args = {
  label: 'خیر متاسفانه',
  status: 'danger',
  children: <i className="ic-close"></i>,
};

export const WarningStatusWithIcon = Template.bind({});

WarningStatusWithIcon.args = {
  label: 'بد',
  status: 'warning',
  children: <i className="ic-flame"></i>,
};

export const InfoStatusWithIcon = Template.bind({});

InfoStatusWithIcon.args = {
  label: 'عالی',
  status: 'info',
  children: <i className="ic-like"></i>,
};

export const DetailStatusWithIcon = Template.bind({});

DetailStatusWithIcon.args = {
  label: 'به من خبر بده',
  status: 'detail',
  children: <i className="ic-notif"></i>,
};
