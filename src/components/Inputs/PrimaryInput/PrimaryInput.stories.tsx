import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrimaryInput from './PrimaryInput';

export default {
  title: 'Components/Inputs/Primary Input',
  component: PrimaryInput,
  decorators: [
    (PrimaryInput) => (
      <div className="d-flex flex-column align-items-center">
        <div className="mt-4" style={{ width: '100%' }}>
          <PrimaryInput />
        </div>

        <div className="mt-4" style={{ width: '80%' }}>
          <PrimaryInput />
        </div>

        <div className="mt-4" style={{ width: '60%' }}>
          <PrimaryInput />
        </div>

        <div className="mt-4" style={{ width: '40%' }}>
          <PrimaryInput />
        </div>

        <div className="mt-4" style={{ width: '20%' }}>
          <PrimaryInput />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof PrimaryInput>;

const Template: ComponentStory<typeof PrimaryInput> = (args) => <PrimaryInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'نام',
  id: 'name',
  name: 'name',
  placeholder: '',
  required: false,
};

export const PrimaryWithIcon = Template.bind({});

PrimaryWithIcon.args = {
  label: 'رمز عبور',
  id: 'password',
  name: 'password',
  placeholder: '',
  required: true,
  children: (
    <button type="button">
      <i className="ic-eyes-slash"></i>
    </button>
  ),
};
