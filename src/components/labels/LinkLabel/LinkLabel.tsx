import Link from 'next/link';
import clsx from 'clsx';
import styles from '@styles/06-components/labels/_c.linkLabel.module.scss';
import LinkLabelProps from './LinkLabelProps';

/* 
* * Main link labels
* * Accepts all next <Link> props
This is a functional component in TypeScript React that takes in props of type `LinkLabelProps` and
returns a JSX element. The props include `label`, `href`, `target`, and `children`. The `target`
prop has a default value of `'_blank'`. The component renders a `Link` component from the
`next/link` library with the `href`, `target`, and `className` props passed in. The `label` and
`children` props are rendered as the content of the `Link` component. The `otherProps` are spread
into the `Link` component, allowing for additional props to be passed in. */
function LinkLabel({
  label = '',
  size = 'xs',
  target = '_blank',
  class: customClass = '',
  href,
  children,
  ...linkProps
}: LinkLabelProps): JSX.Element {
  return (
    <Link
      target={target}
      href={href}
      className={clsx(styles['c-link-label'], {
        [styles['c-link-label--xs']]: size === 'xs',
        [styles['c-link-label--sm']]: size === 'sm',
        [customClass]: customClass,
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...linkProps}
    >
      {label}
      {children}
    </Link>
  );
}

export default LinkLabel;
