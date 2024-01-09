import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './ActionButton';

export default {
  title: 'Components/Buttons/Action Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Button) => (
      <div className="d-flex flex-column align-items-center">
        <div style={{ width: '100%' }}>
          <Button />
        </div>

        <div className="mt-4" style={{ width: '80%' }}>
          <Button />
        </div>

        <div className="mt-4" style={{ width: '60%' }}>
          <Button />
        </div>

        <div className="mt-4" style={{ width: '40%' }}>
          <Button />
        </div>

        <div className="mt-4" style={{ width: '20%' }}>
          <Button />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'مشاهده همه',
  size: 'lg',
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  label: 'مشاهده همه',
  disabled: true,
  size: 'lg',
};

export const PrimaryIconMode = Template.bind({});

PrimaryIconMode.args = {
  label: 'مشاهده محصول',
  size: 'md',
  children: <i className="ic-plus-circle" />,
};

export const PrimaryLoadingMode = Template.bind({});

PrimaryLoadingMode.args = {
  label: 'مشاهده محصول',
  size: 'md',
  loading: true,
  children: <i className="ic-plus-circle" />,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'مشاهده کالاهای بیشتر',
  size: 'md',
  secondary: true,
};

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
  label: 'مشاهده همه',
  disabled: true,
  size: 'lg',
};

export const SecondaryIconMode = Template.bind({});

SecondaryIconMode.args = {
  label: 'مشاهده کالاهای بیشتر',
  size: 'sm',
  children: <i className="ic-arr-left"></i>,

  secondary: true,
};

export const SecondaryLoadingMode = Template.bind({});

SecondaryLoadingMode.args = {
  label: 'مشاهده کالاهای بیشتر',
  loading: true,
  size: 'sm',
  children: <i className="ic-arr-left"></i>,

  secondary: true,
};

export const Outline = Template.bind({});

Outline.args = {
  label: 'مشاهده محصول',
  size: 'sm',
  outline: true,
};

export const OutlineIconDisabled = Template.bind({});

OutlineIconDisabled.args = {
  label: 'مشاهده محصول',
  size: 'sm',
  disabled: true,
  outline: true,
  children: <i className="ic-arr-chev-left"></i>,
};

export const OutlineIconMode = Template.bind({});

OutlineIconMode.args = {
  label: 'مشاهده محصول',
  size: 'sm',
  outline: true,
  children: <i className="ic-arr-chev-left"></i>,
};

export const OutlineLoadingMode = Template.bind({});

OutlineLoadingMode.args = {
  label: 'مشاهده محصول',
  size: 'sm',
  loading: true,
  outline: true,
};
