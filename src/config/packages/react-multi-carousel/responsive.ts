/* This is defining an object called `CarouselResponsiveSizes` that contains breakpoints and the number
of items to display for different screen sizes. Each key in the object represents a screen size
category (e.g. `xxl`, `lg`, `sm`) and has a corresponding object value that contains the `max` and
`min` values for the screen size breakpoint, as well as the number of `items` to display for that
screen size category. This object can be used to configure a carousel component to display a
different number of items based on the user's screen size. */
const CarouselResponsiveSizes = {
  xxxxl: {
    breakpoint: { max: 4000, min: 1600 },
    items: 1,
  },
  xxxl: {
    breakpoint: { max: 1600, min: 1400 },
    items: 1,
  },
  xxl: {
    breakpoint: { max: 1400, min: 1200 },
    items: 1,
  },
  xl: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
  },
  lg: {
    breakpoint: { max: 992, min: 768 },
    items: 1,
  },
  md: {
    breakpoint: { max: 768, min: 576 },
    items: 1,
  },
  sm: {
    breakpoint: { max: 576, min: 420 },
    items: 1,
  },
  xs: {
    breakpoint: { max: 420, min: 320 },
    items: 1,
  },
  xxs: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
  xxxs: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default CarouselResponsiveSizes;
