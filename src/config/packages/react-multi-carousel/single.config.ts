import styles from '@styles/06-components/carousel/singleCarousel.module.scss';
import CarouselResponsiveSizes from './responsive';

// TODO: Define config object with class or defineproperties so that, the properties cant be writed (writable: false)

/* This code defines an object named `config` that contains various properties and their corresponding
values. These properties define the behavior and appearance of a carousel component. The properties
include `swipeable`, `draggable`, `showDots`, `renderArrowsWhenDisabled`, `responsive`, `infinite`,
`autoPlay`, `autoPlaySpeed`, `keyBoardControl`, `transitionDuration`, `customTransition`,
`containerClass`, `dotListClass`, `sliderClass`, and `itemClass`. These properties can be used to
configure the carousel component and customize its behavior and appearance. */
const config = {
  swipeable: true,
  draggable: false,
  showDots: true,
  renderArrowsWhenDisabled: true,
  responsive: CarouselResponsiveSizes,
  infinite: true,
  autoPlay: false,
  autoPlaySpeed: 3000,
  keyBoardControl: true,
  transitionDuration: 200,
  customTransition: 'transform 200ms ease-in',
  containerClass: styles['c-carousel__container'],
  dotListClass: styles['c-carousel__dots'],
  sliderClass: styles['c-carousel__track'],
  itemClass: styles['c-carousel__item'],
};

export default config;
