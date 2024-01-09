import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import { DAYS, JOBS } from './sample.mock';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'روز',
  data: DAYS,
  canSearch: false,
  getSelectedValue(value) {
    console.log(value);
  },
};

export const WithPlacheholder = Template.bind({});

WithPlacheholder.args = {
  label: 'روز',
  data: JOBS,
  canSearch: false,
  placeholder: '...انتخاب شغل',
  getSelectedValue(value) {
    console.log(value);
  },
};

export const LoadingList = Template.bind({});

LoadingList.args = {
  label: 'روز',
  data: DAYS,
  canSearch: false,
  isLoading: true,
  getSelectedValue(value) {
    console.log(value);
  },
};
export const EmptyList = Template.bind({});

EmptyList.args = {
  label: 'روز',
  data: [],
  canSearch: false,
  isLoading: false,
  getSelectedValue(value) {
    console.log(value);
  },
};
