import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecondaryInput from './SecondaryInput';

export default {
  title: 'Components/Inputs/Secondary Input',
  component: SecondaryInput,
  decorators: [
    (SecondaryInput) => (
      <div className="d-flex flex-column align-items-center">
        <div style={{ width: '100%' }}>
          <SecondaryInput />
        </div>

        <div className="mt-4" style={{ width: '80%' }}>
          <SecondaryInput />
        </div>

        <div className="mt-4" style={{ width: '60%' }}>
          <SecondaryInput />
        </div>

        <div className="mt-4" style={{ width: '40%' }}>
          <SecondaryInput />
        </div>

        <div className="mt-4" style={{ width: '20%' }}>
          <SecondaryInput />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof SecondaryInput>;

const Template: ComponentStory<typeof SecondaryInput> = (args) => <SecondaryInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'email',
  id: 'email',
  placeholder: 'ثبت ایمیل',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  type: 'text',
  id: 'email',
  placeholder: '',
  children: <i className="ic-mail"></i>,
  onClickInputButton: () => alert('Clicked'),
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  type: 'password',
  id: 'password',
  placeholder: 'رمز عبور ...',
  children: <i className="ic-eyes"></i>,
};

export const WithError = Template.bind({});

WithError.args = {
  type: 'email',
  id: 'password',
  placeholder: '',
  children: <i className="ic-eyes"></i>,
  errors: {
    password: {
      message: 'رمز اشتباه است.',
    },
  },
};
