import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComparisionTable from './ComparisionTable';
import {
  COMPARISION_TABLE_ITEMS_2ITEM,
  COMPARISION_TABLE_ITEMS_3ITEM,
  COMPARISION_TABLE_ITEMS_4ITEM,
} from './sample.mock';

export default {
  title: 'Components/Tables/Comparision Table',
  component: ComparisionTable,
  decorators: [
    (ComparisionTable) => (
      <div className="o-container">
        <ComparisionTable />
      </div>
    ),
  ],
} as ComponentMeta<typeof ComparisionTable>;

const Template: ComponentStory<typeof ComparisionTable> = (args) => <ComparisionTable {...args} />;

export const SizeLGUp = Template.bind({});

SizeLGUp.args = {
  title: 'مقایسه با محصولات مشابه',
  content: COMPARISION_TABLE_ITEMS_4ITEM,
};

export const SizeLGUp3Item = Template.bind({});

SizeLGUp3Item.args = {
  title: 'مقایسه با محصولات مشابه',
  content: COMPARISION_TABLE_ITEMS_3ITEM,
};

export const SizeSMUp = Template.bind({});

SizeSMUp.parameters = {
  viewport: {
    defaultViewport: 'sm',
  },
};

SizeSMUp.args = {
  title: 'مقایسه با محصولات مشابه',
  content: COMPARISION_TABLE_ITEMS_3ITEM,
};

export const SizeXXSUp = Template.bind({});

SizeXXSUp.parameters = {
  viewport: {
    defaultViewport: 'xxs',
  },
};

SizeXXSUp.args = {
  title: 'مقایسه با محصولات مشابه',
  content: COMPARISION_TABLE_ITEMS_2ITEM,
};

export const NoContent = Template.bind({});

NoContent.args = {
  title: 'مقایسه با محصولات مشابه',
  content: [],
};
