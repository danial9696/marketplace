import clsx from 'clsx';
import styles from '@styles/06-components/buttons/_c.button.module.scss';
import Loading from '@components/Loading';
import { ActionButtonProps } from './ActionButtonProps';

/**
 * This is a TypeScript React function that returns a button element with various props for styling and
 * functionality.
 * @param {ActionButtonProps} props - The `props` parameter is an object that contains the properties
 * passed to the `ActionButton` component. These properties include `type`, `secondary`, `outline`,
 * `disabled`, `size`, `onClick`, 'class', `label`, `loading` and `children`.
 * @returns A JSX element, specifically a button element with various props and classNames based on the
 * props passed in.
 */
function ActionButton(props: ActionButtonProps): JSX.Element {
  const { size = 'xs', type = 'button', loading = false } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(styles['c-button'], {
        [props.class ?? '']: props.class && props.class?.length > 0,
        [styles['c-button--secondary']]: props.secondary,
        [styles['c-button--outline']]: props.outline,
        [styles['c-button--disabled']]: props.disabled,
        [styles[`c-button--${props.outline}`]]: props.outline,
        [styles[`c-button--${size}`]]: size,
      })}
      onClick={props.onClick}
    >
      {!loading ? (
        <>
          {props.label}
          {props.children}
        </>
      ) : (
        <Loading type={1} />
      )}
    </button>
  );
}

export default ActionButton;
