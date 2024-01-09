import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  decorators: [
    (Checkbox) => (
      <div className="o-container">
        <Checkbox />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'apple',
  label: 'اپل',
};

export const DefaultContained = Template.bind({});

DefaultContained.args = {
  id: 'apple',
  label: 'اپل',
  type: 'contained',
};

export const Primary = Template.bind({});

Primary.args = {
  id: 'apple',
  label: 'اپل',
  status: 'primary',
};

export const PrimaryContained = Template.bind({});

PrimaryContained.args = {
  type: 'contained',
  id: 'apple',
  label: 'اپل',
  status: 'primary',
};

export const Danger = Template.bind({});

Danger.args = {
  id: 'apple',
  label: 'اپل',
  status: 'danger',
};

export const DangerContained = Template.bind({});

DangerContained.args = {
  type: 'contained',
  id: 'apple',
  label: 'اپل',
  status: 'danger',
};

export const Warning = Template.bind({});

Warning.args = {
  id: 'apple',
  label: 'اپل',
  status: 'warning',
};

export const WarningContained = Template.bind({});

WarningContained.args = {
  type: 'contained',
  id: 'apple',
  label: 'اپل',
  status: 'warning',
};

export const Info = Template.bind({});

Info.args = {
  id: 'apple',
  label: 'بیمه پستی مرسوله: ۴۲,۰۰۰ تومان',
  status: 'info',
};

export const InfoContained = Template.bind({});

InfoContained.args = {
  type: 'contained',
  id: 'apple',
  label: 'بیمه پستی مرسوله: ۴۲,۰۰۰ تومان',
  status: 'info',
};

export const Detail = Template.bind({});

Detail.args = {
  id: 'apple',
  label: 'بیمه پستی مرسوله: ۴۲,۰۰۰ تومان',
  status: 'detail',
};

export const DetailContained = Template.bind({});

DetailContained.args = {
  type: 'contained',
  id: 'apple',
  label: 'بیمه پستی مرسوله: ۴۲,۰۰۰ تومان',
  status: 'detail',
};

export const DefaultChecked = Template.bind({});

DefaultChecked.args = {
  id: 'apple',
  label: 'اپل',
  defaultChecked: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  id: 'apple',
  label: 'بیمه پستی مرسوله: ۴۲,۰۰۰ تومان',
};
