import Link from 'next/link';
import clsx from 'clsx';
import styles from '@styles/06-components/labels/_c.secondaryLabel.module.scss';
import SecondaryLabelProps from './SecondaryLabelProps';

/* 
 * * Secondary label links
 * * Width set to parent's width
 * * Pass icon as children
 * * Accept all next <Link> propsThis is a functional component in TypeScript React that takes in props of type `SecondaryLabelProps`
and returns a JSX element. The props include `label`, `target`, `href`, and `children`, as well as
any other props that may be passed in using the spread operator (`...linkProps`). The component
renders a `Link` component from the `next/link` library with the `target`, `className`, and `href`
props passed in. The `children` and `label` props are also rendered within the `Link` component. */
function SecondaryLabel({
  label = '',
  size = 'sm',
  class: customClass = '',
  target,
  href,
  children,
  ...linkProps
}: SecondaryLabelProps): JSX.Element {
  return (
    <Link
      target={target}
      className={clsx(styles['c-sec-label'], {
        [styles['c-sec-label--sm']]: size === 'sm',
        [styles['c-sec-label--md']]: size === 'md',
        [customClass]: customClass,
      })}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...linkProps}
    >
      {children}
      {label}
    </Link>
  );
}

export default SecondaryLabel;
