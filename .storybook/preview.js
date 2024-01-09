import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import customViewports from './custom-viewports';
import * as NextImage from 'next/image';
import '../src/styles/main.scss';
import '../src/styles/scss/03-generic/generic.fonts.scss';
import '../src/styles/scss/03-generic/generic.icons.scss';
import './reset.css';

/* This is being done so that the
original `NextImage` component can be accessed and modified later in the code. */
const OriginalNextImage = NextImage.default;

/* 
! For images to be shown in storybook we must make next.js Images 'unoptimized'
This code is modifying the behavior of the default export of the `next/image` module. It is using
the `Object.defineProperty()` method to define a new property on the `NextImage` object called
`default`. The `configurable` property is set to `true` to allow the property to be redefined later
if needed. The `value` property is set to a new function that takes in `props` and returns the
original `NextImage` component with the `unoptimized` prop added. This modification is being made to
disable the automatic optimization of images by Next.js, which can cause issues with certain image
formats or sizes. */
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

/*
 * This code is defining a configuration object for the Storybook UI.
 The `parameters` object contains
two properties: `actions` and `controls`. */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /* This code is configuring the viewport options for Storybook UI. The `INITIAL_VIEWPORTS` object
contains a set of default viewport sizes, and the `customViewports` object contains additional
custom viewport sizes. The spread operator (`...`) is used to merge these two objects into a single
`viewports` object, which is then passed as a parameter to the `viewport` property in the
`parameters` object. This allows Storybook to display the UI in different viewport sizes, which can
be useful for testing responsive design. */
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
  /* This code is configuring the sorting order of stories in the Storybook UI. The `storySort` function
 takes in two parameters, `a` and `b`, which represent two stories being compared. The function
 first checks if the `kind` property of the two stories is the same. If it is, the function returns
 `0`, indicating that the two stories should be sorted in the same order. If the `kind` property is
 different, the function uses the `localeCompare()` method to compare the `id` property of the two
 stories, which is a string that represents the story's name. The `{ numeric: true }` option is
 passed to `localeCompare()` to ensure that the comparison is done numerically rather than
 alphabetically. This sorting configuration ensures that stories are sorted first by their `kind`
 property, and then by their `id` property within each kind. */
};
