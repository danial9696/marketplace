import clsx from 'clsx';
import styles from '@styles/06-components/buttons/_c.secondaryButton.module.scss';
import { SecondaryButtonProps } from './SecondaryButtonProps';

/**
 * This is a TypeScript React function that returns a secondary button component with a label and an
 * onClick event handler.
 * @param {SecondaryButtonProps} props - props is an object that contains the properties passed to the
 * SecondaryButton component. These properties include onClick, children,  label and class.
 * @returns A JSX element representing a secondary button with a label and an optional click event
 * handler.
 */
function SecondaryButton(props: SecondaryButtonProps): JSX.Element {
  const { size = 'xs', type = 'button' } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(styles['c-sec-button'], {
        [styles[`c-sec-button--${size}`]]: size,
        [props.class ?? '']: props.class && props.class?.length > 0,
      })}
      onClick={props.onClick}
    >
      <span>{props.label}</span>
      {props.children}
    </button>
  );
}

export default SecondaryButton;
