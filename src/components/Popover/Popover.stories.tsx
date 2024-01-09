import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popover from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  decorators: [
    (Popover) => (
      <div className="o-container">
        <Popover />
      </div>
    ),
  ],
} as ComponentMeta<typeof Popover>;

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
    <i className="ic ic-dot" style={{ fontSize: '32px', color: '#646262' }} />
  </button>
);

const PopoverListContent = (
  <ul>
    <li className="u-p3 mb-2">
      <a href="http://">گزارش نادرستی</a>
    </li>

    <li className="u-p3 mb-2">
      <button type="button">ریپورت کاربر</button>
    </li>

    <li className="u-p3">
      <button type="button">حذف دیدگاه</button>
    </li>
  </ul>
);

const PopoverTextContent = (
  <p>کد تخفیف انتخاب شده تنها برای خرید در دسته کامپیوتر و لپتاپ معتبر می‌باشد</p>
);

const StickToTopRightTemplate: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const WithTextStickToTopRight = StickToTopRightTemplate.bind({});

WithTextStickToTopRight.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const StickToTopLeftTemplate: ComponentStory<typeof Popover> = (args) => (
  <div className="d-flex justify-content-end" style={{ height: '90vh' }}>
    <Popover {...args} />
  </div>
);

export const WithTextStickToTopLeft = StickToTopLeftTemplate.bind({});

WithTextStickToTopLeft.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const StickToBottomLeftTemplate: ComponentStory<typeof Popover> = (args) => (
  <div className="d-flex justify-content-end align-items-end" style={{ height: '90vh' }}>
    <Popover {...args} />
  </div>
);

export const WithTextStickToBottomLeft = StickToBottomLeftTemplate.bind({});

WithTextStickToBottomLeft.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const StickToBottomRightTemplate: ComponentStory<typeof Popover> = (args) => (
  <div className="d-flex align-items-end" style={{ height: '90vh' }}>
    <Popover {...args} />
  </div>
);

export const WithTextStickToBottomRight = StickToBottomRightTemplate.bind({});

WithTextStickToBottomRight.args = {
  trigger: TriggerButton,
  children: PopoverTextContent,
};

const CenterTemplate: ComponentStory<typeof Popover> = (args) => (
  <div className="d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>
    <Popover {...args} />
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

export const ListCenterContentSideRight = CenterTemplate.bind({});

ListCenterContentSideRight.args = {
  trigger: TriggerButton,
  children: PopoverListContent,
  side: 'right',
};

export const ListCenterContentSideBottom = CenterTemplate.bind({});

ListCenterContentSideBottom.args = {
  trigger: TriggerButton,
  children: PopoverListContent,
};

export const ListCenterContentSideLeft = CenterTemplate.bind({});

ListCenterContentSideLeft.args = {
  trigger: TriggerButton,
  children: PopoverListContent,
  side: 'left',
};

export const ListCenterContentSideTop = CenterTemplate.bind({});

ListCenterContentSideTop.args = {
  trigger: TriggerButton,
  children: PopoverListContent,
  side: 'top',
};

export const ListCenterThreeDotButton = CenterTemplate.bind({});

ListCenterThreeDotButton.args = {
  trigger: TriggerDotButton,
  children: PopoverListContent,
  side: 'top',
};
