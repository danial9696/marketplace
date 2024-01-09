import { ComponentStory, ComponentMeta } from '@storybook/react';
import Range from './Range';

export default {
  title: 'Components/Inputs/Range',
  component: Range,
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'حداقل',
  label: 'تومان',
  id: 'number',
};
