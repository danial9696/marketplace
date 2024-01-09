import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkButton from './LinkButton';

export default {
  title: 'Components/Links',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'مشاهده همه',
  href: 'http://marketplaceit.com',
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'بازگشت به سبد خرید',
  href: '/',
  secondary: true,
};
