import { ComponentStory, ComponentMeta } from '@storybook/react';
import SpecTable from './SpecTable';
import SPEC_TABLE_ITEMS from './sample.mock';

export default {
  title: 'Components/Tables/Spec Table',
  component: SpecTable,
  decorators: [
    (SpecTable) => (
      <div className="o-container">
        <SpecTable />
      </div>
    ),
  ],
} as ComponentMeta<typeof SpecTable>;

const Template: ComponentStory<typeof SpecTable> = (args) => <SpecTable {...args} />;

export const WithBorder = Template.bind({});

WithBorder.args = {
  title: 'مقایسه با محصولات مشابه',
  content: SPEC_TABLE_ITEMS,
};

export const NoBorder = Template.bind({});

NoBorder.args = {
  title: 'مقایسه با محصولات مشابه',
  content: SPEC_TABLE_ITEMS,
  border: false,
};

const MoreTableTemplate: ComponentStory<typeof SpecTable> = (args) => (
  <>
    <SpecTable {...args} title="مشخصات کلی" />
    <SpecTable class="mt-sm-8 mt-xxs-4" {...args} title="مشخصات ظاهری" />
    <SpecTable class="mt-sm-8 mt-xxs-4" {...args} title="مشخصات فنی" />
  </>
);

export const MoreTable = MoreTableTemplate.bind({});

MoreTable.args = {
  content: SPEC_TABLE_ITEMS,
};

export const MoreTableNoBorder = MoreTableTemplate.bind({});

MoreTableNoBorder.args = {
  content: SPEC_TABLE_ITEMS,
  border: false,
};

export const NoContent = Template.bind({});

NoContent.args = {
  title: 'مقایسه با محصولات مشابه',
  content: [],
};
