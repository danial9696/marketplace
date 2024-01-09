import { FunctionComponentElement } from 'react';
import clsx from 'clsx';
import styles from '@styles/06-components/buttons/_c.iconButton.module.scss';
import { IconButtonProps } from './IconButtonProps';

/**
 * This is a TypeScript React function that returns a button element with customizable properties such
 * as size, status, and label.
 * @param {IconButtonProps} props - The function IconButton takes in a single parameter called props,
 * which is of type IconButtonProps. This parameter is an object that contains various properties that
 * can be passed to the IconButton component, such as size, btnType, status, secondary, class, onClick,
 * label, and children. These properties are used
 * @returns A function component element of type `IconButtonProps`.
 */
function IconButton(props: IconButtonProps): FunctionComponentElement<IconButtonProps> {
  const { size = 'xs', btnType = 'button', status = 'info', secondary = false } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType}
      className={clsx(`${styles['c-icon-button']}`, {
        [styles[`c-icon-button--secondary`]]: secondary,
        [styles[`c-icon-button--${size}`]]: size,
        [styles[`c-icon-button--${status}`]]: status,
        [props.class ?? '']: props.class,
      })}
      onClick={props.onClick}
    >
      {props.children}
      <span>{props.label}</span>
    </button>
  );
}

export default IconButton;
