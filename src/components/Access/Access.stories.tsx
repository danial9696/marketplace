import { ComponentStory, ComponentMeta } from '@storybook/react';
import Access from './Access';
import ACCESS_ITEMS from './sample.mock';

export default {
  title: 'Components/Easy Accessibility',
  component: Access,
} as ComponentMeta<typeof Access>;

const StickToRightTemplate: ComponentStory<typeof Access> = (args) => (
  <div
    style={{
      backgroundColor: '#fafafa',
      padding: '16px 0',
      boxShadow: 'rgb(234 234 234 / 15%) 0px 0px 4px 0px',
    }}
  >
    <Access {...args} />
  </div>
);

export const StickRoRight = StickToRightTemplate.bind({});

StickRoRight.args = {
  items: ACCESS_ITEMS,
  side: 'right',
  tooltipDelay: 150,
};

const StickToLeftTemplate: ComponentStory<typeof Access> = (args) => (
  <div
    style={{
      backgroundColor: '#fafafa',
      padding: '16px 0',
      boxShadow: 'rgb(234 234 234 / 15%) 0px 0px 4px 0px',
    }}
  >
    <div className="d-flex justify-content-end">
      <Access {...args} />
    </div>
  </div>
);

export const StickToLeft = StickToLeftTemplate.bind({});

StickToLeft.args = {
  items: ACCESS_ITEMS,
  side: 'left',
  tooltipDelay: 150,
};

const CenteredTemplate: ComponentStory<typeof Access> = (args) => (
  <div
    style={{
      backgroundColor: '#fafafa',
      padding: '16px 0',
      boxShadow: 'rgb(234 234 234 / 15%) 0px 0px 4px 0px',
    }}
  >
    <div className="d-flex justify-content-center">
      <Access {...args} />
    </div>
  </div>
);

export const Centered = CenteredTemplate.bind({});

Centered.args = {
  items: ACCESS_ITEMS,
  side: 'left',
  tooltipDelay: 150,
};
