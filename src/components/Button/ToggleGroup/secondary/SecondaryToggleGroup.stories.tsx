import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrimaryToggleGroup from './SecondaryToggleGroup';
import TOGGLE_ITEMS from './sample.mock';

export default {
  title: 'Components/Buttons/Toggle Buttons/Secondary',
  component: PrimaryToggleGroup,
} as ComponentMeta<typeof PrimaryToggleGroup>;

const Template: ComponentStory<typeof PrimaryToggleGroup> = (args) => (
  <PrimaryToggleGroup {...args} />
);

export const SingleValue = Template.bind({});

SingleValue.args = {
  type: 'single',
  items: TOGGLE_ITEMS,
  sendValue: (value) => {},
};

export const SelectedDefaultSingleValue = Template.bind({});

SelectedDefaultSingleValue.args = {
  type: 'single',
  defaultValue: '1',
  items: TOGGLE_ITEMS,
  sendValue: (value) => {},
};

export const MultiValue = Template.bind({});

MultiValue.args = {
  type: 'multiple',
  items: TOGGLE_ITEMS,
  sendValue: (value) => {},
};

export const SelectedsDefaultMultiValue = Template.bind({});

SelectedsDefaultMultiValue.args = {
  type: 'multiple',
  defaultValue: ['2', '4'],
  items: TOGGLE_ITEMS,
  sendValue: (value) => {},
};
