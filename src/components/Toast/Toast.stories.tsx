import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from './Toast';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@components/Button';

export default {
  title: 'Components/Toasts',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * This function sets the state of a boolean variable to control the opening and closing of a toast
   * notification.
   * @param {boolean} open - The `open` parameter is a boolean value that is used to determine whether a
   * toast notification should be displayed or not. If `open` is `true`, the toast notification will be
   * displayed, and if it is `false`, the toast notification will be hidden. The `toastOpenHandler`
   * function
   */
  const toastOpenHandler = (open: boolean) => setIsOpen(open);

  return (
    <div className="o-container d-flex justify-content-center align-items-center">
      <IconButton onClick={() => setIsOpen(true)} label="اضافه کردن به تقویم" btnType="button" />

      <Toast {...args} open={isOpen} openHandler={toastOpenHandler} />
    </div>
  );
};

export const DefaultFromUp = Template.bind({});

DefaultFromUp.args = {
  direction: 'top',
  title: 'کارشناسان در اسرع وقت با شما تماس خواهد گرفت',
  description: 'توضیحات',
};

export const DefaultFromDown = Template.bind({});

DefaultFromDown.args = {
  direction: 'bottom',
  title: 'کارشناسان در اسرع وقت با شما تماس خواهد گرفت',
  description: 'در صورت عدم پرداخت سبد خرید شما  لغو خواهد شد',
};

export const DefaultFromBottomLeft = Template.bind({});

DefaultFromBottomLeft.args = {
  direction: 'btl',
  title: 'کارشناسان در اسرع وقت با شما تماس خواهد گرفت',
};

export const DefaultFromBottomRight = Template.bind({});

DefaultFromBottomRight.args = {
  status: 'danger',
  direction: 'btr',
  title: 'کارشناسان در اسرع وقت با شما تماس خواهد گرفت',
};

export const DefaultWithAction = Template.bind({});

DefaultWithAction.args = {
  direction: 'top',
  title: 'کارشناسان در اسرع وقت با شما تماس خواهد گرفت',
  description: 'در صورت عدم پرداخت سبد خرید شما  لغو خواهد شد',
  action: {
    title: 'تلاش مجدد',
    altText: 'تلاش مجدد',
    onClick: () => {},
  },
};

export const DefaultWithActionNoDescription = Template.bind({});

DefaultWithActionNoDescription.args = {
  direction: 'top',
  title: 'کارشناسان در اسرع وقت با شما تماس خواهد گرفت',
  status: 'danger',
  action: {
    title: 'دوباره سعی کنید',
    altText: 'دوباره سعی کنید',
    onClick: () => {},
  },
};

export const Warning = Template.bind({});

Warning.args = {
  direction: 'top',
  title: 'در صورت عدم پرداخت سبد خرید شما  لغو خواهد شد',
  status: 'warning',
};

export const Danger = Template.bind({});

Danger.args = {
  direction: 'btr',
  title: 'عدم اتصال به اینترنت',
  description: 'اطلاعات شما با موفقیت تغییر یافت',
  status: 'danger',
};

export const Success = Template.bind({});

Success.args = {
  direction: 'top',
  title: 'اطلاعات شما با موفقیت تغییر یافت',
  status: 'success',
};

export const Detail = Template.bind({});

Detail.args = {
  direction: 'bottom',
  title: 'شماره سفارش: ۵۶۸۰۳۷۹۸',
  status: 'detail',
};

export const Dark = Template.bind({});

Dark.args = {
  title: 'از اتصال به اینترنت مطمئن شوید',
  status: 'dark',
  direction: 'top',
};
