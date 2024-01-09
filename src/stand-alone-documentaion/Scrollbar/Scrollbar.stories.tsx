import { ComponentStory, ComponentMeta } from '@storybook/react';
import ScrollbarSample from './Scrollbar';
import { IconButton } from '@components/Button';

export default {
  title: 'Components/Forms/Contact Us',
  component: ScrollbarSample,
} as ComponentMeta<typeof ScrollbarSample>;

// TODO: Make scrollbar sample
const Template: ComponentStory<typeof ScrollbarSample> = () => {
  return (
    <div
      className="o-container w-50 p-4"
      style={{
        border: ' 1px solid #A7A5A5',
        boxShadow: '0px 0px 20px rgba(87, 87, 87, 0.25)',
        borderRadius: '2px',
      }}
    >
      <ScrollbarSample />
    </div>
  );
};

export const Form = Template.bind({});
