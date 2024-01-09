import { ComponentStory, ComponentMeta } from '@storybook/react';
import ActionList from './ActionList';
import { PRIMARY_ITEMS } from './sample.mock';
// import {
//   PRIMARY_ITEMS_NO_DEFAULT,
//   PRIMARY_ITEMS_WITH_DISABLED,
//   SECONDARY_ITEMS_NO_DEFAULT,
//   SECONDARY_ITEMS_WITH_DISABLED,
// } from './sample.mock';

export default {
  title: 'Components/Lists/Action List',
  component: ActionList,
  decorators: [
    (ActionList) => (
      <div className="o-container">
        <ActionList />
      </div>
    ),
  ],
} as ComponentMeta<typeof ActionList>;

const Template: ComponentStory<typeof ActionList> = (args) => <ActionList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  header: {
    title: 'آدرس‌های شما',
    button: {
      title: 'افزودن آدرس جدید',
      onClick: () => {},
      icon: 'plus',
    },
  },
  content: PRIMARY_ITEMS,
};
