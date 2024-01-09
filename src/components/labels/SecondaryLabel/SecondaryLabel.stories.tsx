import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecondaryLabel from './SecondaryLabel';

export default {
  title: 'Components/Labels/Secondary Label',
  component: SecondaryLabel,
  decorators: [
    (SecondaryLabel) => (
      <div className="d-flex flex-column align-items-center">
        <div style={{ width: '100%' }}>
          <SecondaryLabel />
        </div>

        <div className="mt-4" style={{ width: '80%' }}>
          <SecondaryLabel />
        </div>

        <div className="mt-4" style={{ width: '60%' }}>
          <SecondaryLabel />
        </div>

        <div className="mt-4" style={{ width: '40%' }}>
          <SecondaryLabel />
        </div>

        <div className="mt-4" style={{ width: '20%' }}>
          <SecondaryLabel />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof SecondaryLabel>;

const Template: ComponentStory<typeof SecondaryLabel> = (args) => <SecondaryLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'لپ تاپ اقتصادی',
  href: 'https://marketplaceit.com',
  target: '_blank',
  children: <i className="ic-mobile"></i>,
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: 'لپ‌تاپ گیمینگ',
  href: 'https://marketplaceit.com',
  target: '_blank',
};
