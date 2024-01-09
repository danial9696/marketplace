import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from './Tabs';
import { PRIMARY_TABS_ITEMS, OUTLINED_TABS_ITEMS, OUTLINED_LONG_TABS_ITEMS } from './sample.mock';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// * Start -  Primary

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const PrimaryNoBorderNoHeader = Template.bind({});

PrimaryNoBorderNoHeader.args = {
  trigerrs: PRIMARY_TABS_ITEMS.trigerrs,
  contents: PRIMARY_TABS_ITEMS.contents,
  type: 'primary',
  defaultValue: 'item-1',
};

export const PrimaryNoBorderWithHeader = Template.bind({});

PrimaryNoBorderWithHeader.args = {
  header: {
    title: 'جدیدترین محصولات',
    link: {
      title: 'مشاهده همه',
      href: '/',
    },
  },
  trigerrs: PRIMARY_TABS_ITEMS.trigerrs,
  contents: PRIMARY_TABS_ITEMS.contents,
  type: 'primary',
  defaultValue: 'item-2',
};

export const PrimaryNoBorderWithHeaderNoLink = Template.bind({});

PrimaryNoBorderWithHeaderNoLink.args = {
  header: {
    title: 'جدیدترین محصولات',
  },
  trigerrs: PRIMARY_TABS_ITEMS.trigerrs,
  contents: PRIMARY_TABS_ITEMS.contents,
  type: 'primary',
  defaultValue: 'item-1',
};

export const PrimaryWithBorderHeader = Template.bind({});

PrimaryWithBorderHeader.args = {
  header: {
    title: 'جدیدترین محصولات',
    link: {
      title: 'مشاهده همه',
      href: '/',
    },
  },
  trigerrs: PRIMARY_TABS_ITEMS.trigerrs,
  contents: PRIMARY_TABS_ITEMS.contents,
  bordered: true,
  type: 'primary',
  defaultValue: 'item-1',
};

export const PrimaryWithBorderHeaderNoLink = Template.bind({});

PrimaryWithBorderHeaderNoLink.args = {
  header: {
    title: 'جدیدترین محصولات',
  },
  trigerrs: PRIMARY_TABS_ITEMS.trigerrs,
  contents: PRIMARY_TABS_ITEMS.contents,
  bordered: true,
  type: 'primary',
  defaultValue: 'item-1',
};

export const PrimaryWithBorderNoHeaderNoDefaultValue = Template.bind({});

PrimaryWithBorderNoHeaderNoDefaultValue.args = {
  trigerrs: PRIMARY_TABS_ITEMS.trigerrs,
  contents: PRIMARY_TABS_ITEMS.contents,
  bordered: true,
  type: 'primary',
};

// * End -  Primary

// * Start - Outlined

export const OutlinedNoBorderNoHeader = Template.bind({});

OutlinedNoBorderNoHeader.args = {
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  type: 'secondary',
  defaultValue: 'item-1',
};

export const OutlinedNoBorderWithHeader = Template.bind({});

OutlinedNoBorderWithHeader.args = {
  header: {
    title: 'جدیدترین محصولات',
    link: {
      title: 'مشاهده همه',
      href: '/',
    },
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  type: 'secondary',
  defaultValue: 'item-1',
};

export const OutlinedNoBorderWithHeaderNoLink = Template.bind({});

OutlinedNoBorderWithHeaderNoLink.args = {
  header: {
    title: 'جدیدترین محصولات',
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  type: 'secondary',
  defaultValue: 'item-1',
};

export const OutlinedWithBorderHeader = Template.bind({});

OutlinedWithBorderHeader.args = {
  header: {
    title: 'جدیدترین محصولات',
    link: {
      title: 'مشاهده همه',
      href: '/',
    },
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  bordered: true,
  type: 'secondary',
  defaultValue: 'item-1',
};

export const OutlinedWithBorderHeaderNoLink = Template.bind({});

OutlinedWithBorderHeaderNoLink.args = {
  header: {
    title: 'جدیدترین محصولات',
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  bordered: true,
  type: 'secondary',
  defaultValue: 'item-1',
};

export const OutlinedWithBorderNoHeaderNoDefaultValue = Template.bind({});

OutlinedWithBorderNoHeaderNoDefaultValue.args = {
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  bordered: true,
  type: 'secondary',
};

export const OutlinedWithBorderNoHeaderScrollList = Template.bind({});

OutlinedWithBorderNoHeaderScrollList.args = {
  trigerrs: OUTLINED_LONG_TABS_ITEMS.trigerrs,
  contents: OUTLINED_LONG_TABS_ITEMS.contents,
  type: 'secondary',
  defaultValue: 'item-1',
};

// * End - Outlined

// * Start - icon
export const IconNoBorderNoHeader = Template.bind({});

IconNoBorderNoHeader.args = {
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  type: 'icon',
  defaultValue: 'item-1',
};

export const IconNoBorderWithHeader = Template.bind({});

IconNoBorderWithHeader.args = {
  header: {
    title: 'جدیدترین محصولات',
    link: {
      title: 'مشاهده همه',
      href: '/',
    },
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  type: 'icon',
  defaultValue: 'item-1',
};

export const IconNoBorderWithHeaderNoLink = Template.bind({});

IconNoBorderWithHeaderNoLink.args = {
  header: {
    title: 'جدیدترین محصولات',
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  type: 'icon',
  defaultValue: 'item-1',
};

export const IconWithBorderHeader = Template.bind({});

IconWithBorderHeader.args = {
  header: {
    title: 'جدیدترین محصولات',
    link: {
      title: 'مشاهده همه',
      href: '/',
    },
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  bordered: true,
  type: 'icon',
  defaultValue: 'item-1',
};

export const IconWithBorderHeaderNoLink = Template.bind({});

IconWithBorderHeaderNoLink.args = {
  header: {
    title: 'جدیدترین محصولات',
  },
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  bordered: true,
  type: 'icon',
  defaultValue: 'item-1',
};

export const IconWithBorderNoHeaderNoDefaultValue = Template.bind({});

IconWithBorderNoHeaderNoDefaultValue.args = {
  trigerrs: OUTLINED_TABS_ITEMS.trigerrs,
  contents: OUTLINED_TABS_ITEMS.contents,
  bordered: true,
  type: 'icon',
};

export const IconWithBorderNoHeaderScrollList = Template.bind({});

IconWithBorderNoHeaderScrollList.args = {
  trigerrs: OUTLINED_LONG_TABS_ITEMS.trigerrs,
  contents: OUTLINED_LONG_TABS_ITEMS.contents,
  type: 'icon',
  defaultValue: 'item-1',
};
// * End - icon
