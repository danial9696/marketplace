import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'ارسال سریع',
  ariaLabel: 'ارسال سریع',
};

export const DisabledMode = Template.bind({});

DisabledMode.args = {
  disabled: true,
  label: 'ارسال سریع',
};
