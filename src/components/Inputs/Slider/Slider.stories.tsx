import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'Components/Inputs/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {
  range: {
    min: 0,
    max: 100,
    step: 5,
    minStepsBetweenThumbs: 1,
  },
  name: 'price-slider',
  dir: 'rtl',
  ariaLabel: 'Price Slider',
  width: 160,
  sendSelectedValues: (values: number[]) => {
    console.log(values);
  },
};
