import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactInput from './ContactInput';

export default {
  title: 'Components/Inputs/Contact Input',
  component: ContactInput,
  decorators: [
    (ContactInput) => (
      <div className="d-flex flex-column align-items-center">
        <div style={{ width: '100%' }}>
          <ContactInput />
        </div>

        <div className="mt-4" style={{ width: '80%' }}>
          <ContactInput />
        </div>

        <div className="mt-4" style={{ width: '60%' }}>
          <ContactInput />
        </div>

        <div className="mt-4" style={{ width: '40%' }}>
          <ContactInput />
        </div>

        <div className="mt-4" style={{ width: '20%' }}>
          <ContactInput />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof ContactInput>;

const Template: ComponentStory<typeof ContactInput> = (args) => <ContactInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'email',
  id: 'email',
  placeholder: 'ثبت ایمیل',
  iconAccessibilityLabel: 'ثبت ایمیل',
  children: <i className="ic-mail"></i>,
};

export const SubmitSuccess = Template.bind({});

SubmitSuccess.args = {
  type: 'email',
  id: 'email',
  placeholder: 'ثبت ایمیل',
  iconAccessibilityLabel: 'ثبت ایمیل',
  state: {
    mode: 'success',
    text: 'ثبت شد',
  },
  children: <i className="ic-mail"></i>,
};

export const SubmitError = Template.bind({});

SubmitError.args = {
  type: 'email',
  id: 'email',
  placeholder: 'ثبت ایمیل',
  state: {
    mode: 'error',
    text: 'ایمیل ثبت نشد',
  },
  children: <i className="ic-mail"></i>,
};

export const LoadingMode = Template.bind({});

LoadingMode.args = {
  type: 'email',
  id: 'email',
  placeholder: 'ثبت ایمیل',
  state: {
    mode: 'loading',
    text: '',
  },
  children: <i className="ic-mail"></i>,
};

export const ValidationError = Template.bind({});

ValidationError.args = {
  type: 'email',
  id: 'email',
  placeholder: 'ثبت ایمیل',
  state: {
    mode: 'default',
    text: '',
  },
  children: <i className="ic-mail"></i>,
  errors: {
    email: {
      message: 'ایمیل وارد شده صحیح نمی باشد.',
    },
  },
};
