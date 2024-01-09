import { Checkbox as RCheckBox, Indicator } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import clsx from 'clsx';
import styles from '@styles/06-components/inputs/_c.checkbox.module.scss';
import { useState } from 'react';
import CheckBoxProps from './CheckboxProps';

/**
 * This is a TypeScript React component for a checkbox with customizable status, class, and type.
 * @param {CheckBoxProps} props - The function `CheckBox` takes in a single parameter `props` which is
 * of type `CheckBoxProps`. This parameter is an object that contains various properties that can be
 * used to customize the behavior and appearance of the checkbox component. The properties include
 * `status`, `class`, `type`, `disabled`,
 * @returns A JSX element is being returned, which represents a custom checkbox component.
 */
function CheckBox(props: CheckBoxProps): JSX.Element {
  const { status = 'success', class: customClass = '', type = 'normal' } = props;

  const [checked, setChecked] = useState(props.defaultChecked);

  /**
   * This function sets the checked value and calls a callback function with the checked value and an
   * ID.
   * @param {boolean} check - A boolean value that represents whether a checkbox is checked or not.
   * @param {string} id - The "id" parameter is a string that is passed as an argument to the "onCheck"
   * function in the props object. It is used to identify the specific item that is being checked or
   * unchecked.
   */
  const onCheckValue = (check: boolean, id: string): void => {
    setChecked(check);
    props.onCheck(check, id);
  };

  return (
    <div
      className={clsx(styles['c-check'], {
        [styles['c-check--disabled']]: props.disabled,
        [styles[`c-check--${status}`]]: status,
        [customClass]: true,
      })}
    >
      <RCheckBox
        checked={checked}
        required={props.required}
        disabled={props.disabled}
        id={props.id}
        onCheckedChange={(check: boolean) => onCheckValue(check, props.id)}
        className={styles['c-check__indicator']}
      >
        {type === 'normal' ? (
          <Indicator>
            <i className="ic-tick-circle" />
          </Indicator>
        ) : null}
      </RCheckBox>

      <Label className={styles['c-check__label']} htmlFor={props.id}>
        {props.label}
      </Label>
    </div>
  );
}

export default CheckBox;
