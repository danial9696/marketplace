import { useState } from 'react';
import { Label } from '@radix-ui/react-label';
// import { addCommas, removeNonNumeric } from '@lib/utils/numerics';
import styles from '@styles/06-components/inputs/_c.range.module.scss';
import { addCommas, removeNonNumeric } from '@lib/utils';
import RangeProps from './RangeProps';

/**
 * * "This function takes in a RangeProps object and returns a div with a label and an input."
 *
 * * The first thing to notice is that the function is typed. This is done by adding the type of the
 * * props object to the function signature
 * @param {RangeProps} props - RangeProps
 * @returns A component that renders a div with a class of c-range, a div with a class of
 * c-range__wrapper, an input, and a label.
 */
function Range(props: RangeProps) {
  const [value, setValue] = useState('0');

  /**
   * * The function takes an event object as an argument. The event object has a target property, which has
   * * a value property. The value property is a string. The function returns nothing
   * @param event - { target: { value: string } }
   */
  const handleChange = (event: { target: { value: string } }): void => {
    setValue(addCommas(removeNonNumeric(event.target.value)));
  };

  return (
    <div className={styles['c-range']}>
      <div className={styles['c-range__wrapper']}>
        <input
          autoComplete="off"
          type="text"
          id={props.id}
          value={value}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
        <Label>{props.label}</Label>
      </div>
    </div>
  );
}

export default Range;
