import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './SecondaryButton';

export default {
  title: 'Components/Buttons/Secondary Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'مطالعه بیشتر',
  children: <i className="ic-arr-chev-left"></i>,
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: ' برو بالا',
};
