import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderTable from './CustomTable';
import CUSTOM_TABLE_DATA from './sample.mock';

export default {
  title: 'Components/Tables/Custom Table',
  component: OrderTable,
  decorators: [
    (OrderTable) => (
      <div className="o-container">
        <OrderTable className="mt-auto" />
      </div>
    ),
  ],
} as ComponentMeta<typeof OrderTable>;

const Template: ComponentStory<typeof OrderTable> = (args) => <OrderTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  header: [
    {
      title: 'شماره سفارش',
      id: '11',
    },
    {
      title: 'مبلغ کل سفارش',
      id: '22',
    },
    {
      title: 'مبلغ شارژ کیف پول',
      id: '33',
    },
    {
      title: 'تاریخ تراکنش',
      id: '44',
    },
    {
      title: 'وضعیت',
      id: '55',
    },
  ],
  content: CUSTOM_TABLE_DATA,
};

export const DefaultInMobile = Template.bind({});

DefaultInMobile.parameters = {
  viewport: {
    defaultViewport: 'xxs',
  },
};

DefaultInMobile.args = {
  header: [
    {
      title: 'شماره سفارش',
      id: '1',
    },
    {
      title: 'مبلغ کل سفارش',
      id: '2',
    },
    {
      title: 'مبلغ شارژ کیف پول',
      id: '3',
    },
    {
      title: 'تاریخ تراکنش',
      id: '4',
    },
    {
      title: 'وضعیت',
      id: '5',
    },
  ],
  content: CUSTOM_TABLE_DATA,
};
