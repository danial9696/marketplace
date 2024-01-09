import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DROPDOWN_SAMPLE, DROPDOWN_SAMPLE_WITH_DISABLED } from './sample.mock';

export default {
  title: 'Components/Dropdown',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: 'avatar',
  items: DROPDOWN_SAMPLE,
};

export const WithDisabledItem = Template.bind({});

WithDisabledItem.args = {
  icon: 'avatar',
  items: DROPDOWN_SAMPLE_WITH_DISABLED,
};

export const Loading = Template.bind({});

Loading.args = {
  icon: 'avatar',
  loading: true,
  items: [],
};
