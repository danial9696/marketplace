/* eslint-disable react/jsx-props-no-spreading */
import { Fragment, useState } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as ReactMultiCarousel } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '@styles/06-components/carousel/singleCarousel.module.scss';
import '@styles/07-vendors/vendors.singleCarousel.scss';
import config from '../../config/packages/react-multi-carousel/single.config';
import CarouselProps from './CarouselProps';

/**
 *  The code defines a functional component named `Carousel` that takes in a    single parameter `props` of type `CarouselProps` and returns a JSX element.
 * @param {CarouselProps} props - The function `Carousel` takes in a single parameter `props` of type CarouselPropsof.,
 * @returns A JSX element representing a carousel component.
 */
function Carousel(props: CarouselProps): JSX.Element {
  const [isMoving, setIsMoving] = useState(false);

  const handleBeforeChange = (): void => {
    setIsMoving(true);
  };

  const handleAfterChange = (): void => {
    setIsMoving(false);
  };

  return (
    <div className={styles['c-carousel']}>
      {props.data.length > 0 ? (
        <ReactMultiCarousel
          rtl
          className={`${styles['c-carousel__wrapper']} ${
            isMoving ? styles['c-carousel__wrapper--is-moving'] : ''
          }`}
          {...config}
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
        >
          {props.data.map((item) => (
            <Fragment key={item.id}>{item.content}</Fragment>
          ))}
        </ReactMultiCarousel>
      ) : null}
    </div>
  );
}

export default Carousel;
