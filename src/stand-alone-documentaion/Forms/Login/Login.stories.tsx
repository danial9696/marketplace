import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from './Login';
import Dialog from '@components/Dialog';
import { IconButton } from '@components/Button';

export default {
  title: 'Components/Forms/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const TriggerButton = <IconButton label="فرم مشخصات" />;

const Template: ComponentStory<typeof Login> = (args) => {
  return (
    <div
      className="o-container  p-4"
      style={{
        border: ' 1px solid #A7A5A5',
        boxShadow: '0px 0px 20px rgba(87, 87, 87, 0.25)',
        borderRadius: '2px',
      }}
    >
      <Login />
    </div>
  );
};

export const Form = Template.bind({});

export const WithDefaultsValues = Template.bind({});

WithDefaultsValues.args = {
  defaultvalues: {
    firstName: 'Danial',
    lastName: 'John',
  },
};

const ModalTemplate: ComponentStory<typeof Login> = (args) => {
  return (
    <Dialog trigger={TriggerButton} loading={false} title="مشخصات">
      <Login />
    </Dialog>
  );
};

export const FormInModal = ModalTemplate.bind({});

FormInModal.args = {
  defaultvalues: {
    firstName: 'Danial',
    lastName: 'John',
  },
};
