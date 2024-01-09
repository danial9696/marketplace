import Link from 'next/link';
import clsx from 'clsx';
import styles from '@styles/06-components/buttons/_c.linkButton.module.scss';
import { LinkButtonProps } from './LinkButtonProps';

/**
 * This is a TypeScript React function that renders a button with a link and label, with an optional
 * secondary style.
 * @param {LinkButtonProps}  - - `label`: the text label to display on the button
 * @returns A JSX element containing a button with a Link component inside it, which displays a label
 * and an arrow icon. The button has a class of "c-link-button" and an optional
 * "c-link-button--secondary" class if the "secondary" prop is true. The Link component has an href
 * prop and any additional props passed in through the spread operator.
 */
function LinkButton({
  label = '',
  secondary = false,
  href,
  class: customClass = '',
  ...linkProps
}: LinkButtonProps): JSX.Element {
  return (
    <Link
      className={clsx(styles['c-link-button'], {
        [styles['c-link-button--primary']]: !secondary,
        [styles['c-link-button--secondary']]: secondary,
        [customClass]: customClass,
      })}
      href={href}
      target="_blank"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...linkProps}
    >
      <span className={styles['c-link-button__title']}>{label}</span>
      <i className="ic-arr-chev-left" />
    </Link>
  );
}

export default LinkButton;
