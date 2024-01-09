import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckList from './CheckList';
import {
  PRIMARY_ITEMS_NO_DEFAULT,
  PRIMARY_ITEMS_WITH_DISABLED,
  SECONDARY_ITEMS_NO_DEFAULT,
  SECONDARY_ITEMS_WITH_DISABLED,
} from './sample.mock';

export default {
  title: 'Components/Lists/Check List',
  component: CheckList,
  decorators: [
    (CheckList) => (
      <div className="o-container">
        <CheckList />
      </div>
    ),
  ],
} as ComponentMeta<typeof CheckList>;

const Template: ComponentStory<typeof CheckList> = (args) => <CheckList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: PRIMARY_ITEMS_NO_DEFAULT,
  type: 'primary',
  title: 'آدرس',
  button: {
    title: 'افزودن آدرس جدید',
    icon: '',
  },
  icon: 'pin',
  handleValueChange: (item) => console.log(item),
};

export const PrimaryWithDefaultValue = Template.bind({});

PrimaryWithDefaultValue.args = {
  data: PRIMARY_ITEMS_NO_DEFAULT,
  type: 'primary',
  icon: 'pin',
  defaultValue: 'address-3',
  title: 'آدرس',
  handleValueChange: (item) => console.log(item),
};

export const PrimaryWithDisabledItem = Template.bind({});

PrimaryWithDisabledItem.args = {
  data: PRIMARY_ITEMS_WITH_DISABLED,
  type: 'primary',
  icon: 'pin',
  handleValueChange: (item) => console.log(item),
};

export const PrimaryErrorMode = Template.bind({});

PrimaryErrorMode.args = {
  data: PRIMARY_ITEMS_NO_DEFAULT,
  type: 'primary',
  icon: 'pin',
  error: true,
  handleValueChange: (item) => console.log(item),
};

export const Secondary = Template.bind({});

Secondary.args = {
  data: SECONDARY_ITEMS_NO_DEFAULT,
  type: 'secondary',
  handleValueChange: (item) => console.log(item),
};

export const SecondaryWithDefaultValue = Template.bind({});

SecondaryWithDefaultValue.args = {
  data: SECONDARY_ITEMS_NO_DEFAULT,
  type: 'secondary',
  defaultValue: 'address-4',
  handleValueChange: (item) => console.log(item),
};

export const SecondaryWithDisabledValue = Template.bind({});

SecondaryWithDisabledValue.args = {
  data: SECONDARY_ITEMS_WITH_DISABLED,
  type: 'secondary',
  handleValueChange: (item) => console.log(item),
};

export const SecondaryErrorMode = Template.bind({});

SecondaryErrorMode.args = {
  data: SECONDARY_ITEMS_WITH_DISABLED,
  type: 'secondary',
  error: true,
  handleValueChange: (item) => console.log(item),
};
