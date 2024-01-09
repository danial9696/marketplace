/* This is a TypeScript object that defines custom viewports for use in responsive design testing. Each
viewport is defined by a name (e.g. "s", "xs", "sm") and corresponding width and height styles in
pixels. This object can be exported and imported into other files for use in testing frameworks such
as Cypress or Jest. */
const customViewports = {
  s: {
    name: 's (280px)',
    styles: {
      width: '280px',
      height: '500px',
    },
  },
  xxs: {
    name: 'xxs (320px)',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  xs: {
    name: 'xs (420px)',
    styles: {
      width: '420px',
      height: '736px',
    },
  },
  sm: {
    name: 'sm (576px)',
    styles: {
      width: '576px',
      height: '960px',
    },
  },
  md: {
    name: 'md (768px)',
    styles: {
      width: '768px',
      height: '1120px',
    },
  },
  lg: {
    name: 'lg (992px)',
    styles: {
      width: '992px',
      height: '1220px',
    },
  },
  xl: {
    name: 'xl (1200px)',
    styles: {
      width: '1200px',
      height: '1320px',
    },
  },
  xxl: {
    name: 'xxl (1400px)',
    styles: {
      width: '1400px',
      height: '1420px',
    },
  },
  xxxl: {
    name: 'xxxl (1600px)',
    styles: {
      width: '1600px',
      height: '1600px',
    },
  },
  xxxxl: {
    name: 'xxxxl (1800px)',
    styles: {
      width: '1800px',
      height: '1800px',
    },
  },
};

export default customViewports;
