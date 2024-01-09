import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Tooltip) => (
      <div className="o-container">
        <Tooltip />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const TriggerButton = (
  <button
    style={{
      backgroundColor: '#F43B86',
      borderRadius: '2px',
      padding: '12px 8px',
      color: '#ffffff',
    }}
    type="button"
  >
    G89jy23AQl9o
  </button>
);

const TriggerDotButton = (
  <button type="button">
    <i className="ic ic-comparison" style={{ fontSize: '32px', color: '#646262' }} />
  </button>
);

const PopoverTextContent = <p>کیبورد گیمینگ ام اس آی مدل دی اس 4200</p>;

const PopoverTextContent2 = <p>مقایسه</p>;

const StickToTopRightTemplate: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const WithTextStickToTopRight = StickToTopRightTemplate.bind({});

WithTextStickToTopRight.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const StickToTopLeftTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div className="d-flex align-items-end justify-content-end" style={{ height: '90vh' }}>
    <Tooltip {...args} />
  </div>
);

export const WithTextStickToTopLeft = StickToTopLeftTemplate.bind({});

WithTextStickToTopLeft.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const StickToBottomLeftTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div className="d-flex justify-content-end align-items-end" style={{ height: '90vh' }}>
    <Tooltip {...args} />
  </div>
);

export const WithTextStickToBottomLeft = StickToBottomLeftTemplate.bind({});

WithTextStickToBottomLeft.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const StickToBottomRightTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div className="d-flex align-items-end" style={{ height: '90vh' }}>
    <Tooltip {...args} />
  </div>
);

export const WithTextStickToBottomRight = StickToBottomRightTemplate.bind({});

WithTextStickToBottomRight.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const CenterTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div className="d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>
    <Tooltip {...args} />
  </div>
);

export const TextCenterContentSideBottom = CenterTemplate.bind({});

TextCenterContentSideBottom.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

export const TextCenterContentSideLeft = CenterTemplate.bind({});

TextCenterContentSideLeft.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
  side: 'left',
};

export const TextCenterContentSideTop = CenterTemplate.bind({});

TextCenterContentSideTop.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
  side: 'top',
};

export const TextCenterContentSideRight = CenterTemplate.bind({});

TextCenterContentSideRight.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
  side: 'right',
};

export const IconCenterContentSideRight = CenterTemplate.bind({});

IconCenterContentSideRight.args = {
  trigger: TriggerDotButton,
  children: PopoverTextContent2,
  side: 'right',
};

export const IconCenterContentSideBottom = CenterTemplate.bind({});

IconCenterContentSideBottom.args = {
  trigger: TriggerDotButton,
  children: PopoverTextContent2,
  side: 'bottom',
};

export const IconCenterContentSideLeft = CenterTemplate.bind({});

IconCenterContentSideLeft.args = {
  trigger: TriggerDotButton,
  children: PopoverTextContent2,
  side: 'left',
};

export const IconCenterContentSideTop = CenterTemplate.bind({});

IconCenterContentSideTop.args = {
  trigger: TriggerDotButton,
  children: PopoverTextContent2,
  side: 'top',
};
