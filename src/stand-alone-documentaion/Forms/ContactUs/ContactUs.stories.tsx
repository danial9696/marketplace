import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactUsForm from './ContactUs';
import Dialog from '@components/Dialog';
import { IconButton } from '@components/Button';

export default {
  title: 'Components/Forms/Contact Us',
  component: ContactUsForm,
} as ComponentMeta<typeof ContactUsForm>;

const TriggerButton = <IconButton label="فرم مشخصات" />;

const Template: ComponentStory<typeof ContactUsForm> = (args) => {
  return (
    <div
      className="o-container w-50 p-4"
      style={{
        border: ' 1px solid #A7A5A5',
        boxShadow: '0px 0px 20px rgba(87, 87, 87, 0.25)',
        borderRadius: '2px',
      }}
    >
      <ContactUsForm {...args} />
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

const ModalTemplate: ComponentStory<typeof ContactUsForm> = (args) => {
  return (
    <Dialog trigger={TriggerButton} loading={false} title="مشخصات">
      <ContactUsForm {...args} />
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
