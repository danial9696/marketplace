import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popover from './StickyList';
import data from './sample.mock';

export default {
  title: 'Components/Lists/ Sticky List',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: data.header,
  contents: data.content,
};
