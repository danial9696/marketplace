import { useEffect, useState } from 'react';
import { Root, Thumb, Track, Range } from '@radix-ui/react-slider';
import styles from '@styles/06-components/inputs/_c.slider.module.scss';
import SliderProps from './SliderProps';

/**
 * * We use '@radix-ui/react-slider'
 * This is a TypeScript React component that renders a slider with customizable range and width.
 * @param {SliderProps} props - The `props` parameter is an object that contains the properties passed
 * to the `Slider` component. These properties include:
 * @returns A functional component named Slider, which returns a form containing a range slider with
 * two thumbs for selecting a range of values. The component receives props such as range, width,
 * ariaLabel, name, and dir, and uses the useState and useEffect hooks to manage the state of the range
 * values and set the initial width and alpha values of the slider. The getValues function is used to
 * update the range state
 */
function Slider(props: SliderProps): JSX.Element {
  const [range, setRange] = useState({
    min: props.range.min,
    max: props.range.max,
  });

  /* 
   * * Set initial width between min and max value
   * * Calc alpha acording to width
   * * Set initial values of var(--alhpa) and var(--interval-width)This `useEffect` hook is setting the initial width and alpha values of the slider. It calculates
  the range width by subtracting the minimum value from the maximum value, and calculates the alpha
  value by dividing the `props.width` by 100. It then sets these values as CSS variables using
  `document.documentElement.style.setProperty()`. The `[]` as the second argument to `useEffect`
  means that this effect will only run once, when the component mounts. */
  useEffect(() => {
    const rangeWidth = range.max - range.min;
    const alpha = props.width / 100;
    document.documentElement.style.setProperty('--base-width', `${props.width}px`);
    document.documentElement.style.setProperty('--alpha', `${alpha}`);
    document.documentElement.style.setProperty('--interval-width', `${rangeWidth}px`);
  }, [props.width, range.max, range.min]);

  /**
   * * Get selected min and max values
   * * Send selected values to parent with props
   * * Set width of between min and max values
   * * Set value of var(--interval-width) on change of values
   * * Value[1] => Max
   * * Value[0] => Min
   * The function takes an array of numbers as input, calculates the difference between the second and
   * first values, sets a CSS variable with that value, and updates the state with the minimum and
   * maximum values from the input array.
   * @param {number[]} value - An array of two numbers representing the minimum and maximum values of a
   * range.
   */
  const getValues = (value: number[]): void => {
    const betweenValues = value[1] - value[0];

    document.documentElement.style.setProperty('--interval-width', `${betweenValues}px`);

    setRange({
      min: value[0],
      max: value[1],
    });
  };

  return (
    <form>
      <Root
        onValueChange={getValues}
        className={styles['c-slider']}
        defaultValue={[range.min, range.max]}
        minStepsBetweenThumbs={props.range.minStepsBetweenThumbs}
        min={props.range.min}
        max={props.range.max}
        step={props.range.step}
        aria-label={props.ariaLabel}
        name={props.name}
        dir={props.dir}
      >
        <Track className={styles['c-slider__track']}>
          <Range className={styles['c-slider__range']} />
        </Track>

        <Thumb asChild className={styles['c-slider__thumb']}>
          <span>
            <p className={styles['c-slider__thumb-tooltip']}>{range.min}</p>
          </span>
        </Thumb>

        <Thumb className={styles['c-slider__thumb']} asChild>
          <span>
            <p className={styles['c-slider__thumb-tooltip']}>{range.max}</p>
          </span>
        </Thumb>
      </Root>
    </form>
  );
}

export default Slider;
