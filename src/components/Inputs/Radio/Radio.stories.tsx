import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';
import RADIO_ITEMS from './sample.mock';

export default {
  title: 'Components/Inputs/Radio Buttons',
  component: Radio,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RTL = Template.bind({});

RTL.args = {
  dir: 'rtl',
  data: RADIO_ITEMS,
};

export const LTR = Template.bind({});

LTR.args = {
  dir: 'ltr',
  data: RADIO_ITEMS,
};

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {
  data: RADIO_ITEMS,
  defaultValue: 'r3',
};

export const HorizontalLTR = Template.bind({});

HorizontalLTR.args = {
  dir: 'ltr',
  orientation: 'horizontal',
  data: RADIO_ITEMS,
};

export const HorizontalRTL = Template.bind({});

HorizontalRTL.args = {
  dir: 'rtl',
  orientation: 'horizontal',
  data: RADIO_ITEMS,
};
