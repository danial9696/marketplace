import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkLabel from './LinkLabel';

export default {
  title: 'Components/Labels/Link Label',
  component: LinkLabel,
} as ComponentMeta<typeof LinkLabel>;

const Template: ComponentStory<typeof LinkLabel> = (args) => <LinkLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'لپ تاپ اقتصادی',
  href: 'https://marketplaceit.com',
  children: <i className="ic-laptop"></i>,
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: 'موبایل',
  href: 'https://marketplaceit.com',
};
