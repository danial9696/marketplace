const path = require('path');
module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-highlight',
    '@storybook/addon-storysource',
    'storybook-mobile',
    '@storybook/addon-mdx-gfm',
  ],
  typescript: {
    check: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  /* The `interactionsDebugger` feature enables the interactions addon's debugger in Storybook. This
  allows developers to debug interactions and events in their components, such as clicks and hovers,
  by providing a visual representation of the events and their associated data. */
  features: {
    interactionsDebugger: true,
  },
  /* This code block is modifying the Storybook webpack configuration by adding aliases for commonly
  used paths and adding a new rule for handling SCSS files. */
  webpackFinal: async (config) => {
    /* This code block is modifying the Storybook webpack configuration by adding aliases for commonly
    used paths. It creates a new object with the aliases for `@styles`, `@components`, and `@lib`,
    and then spreads the existing `config.resolve.alias` object into it. This ensures that any
    existing aliases are not overwritten. The `path.resolve` method is used to create an absolute
    path to the specified directories. These aliases can then be used in import statements
    throughout the Storybook project to simplify the path to these directories. */
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, '../src/styles/scss'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@lib': path.resolve(__dirname, '../src/lib'),
    };

    return config;
  },
  docs: {
    autodocs: true,
  },
};
