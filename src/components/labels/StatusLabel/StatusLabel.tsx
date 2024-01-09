import { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import styles from '@styles/06-components/labels/_c.statusLabel.module.scss';
import StatusLabelProps from './StatusLabelProps';

/**
 * * Default status is 'default'
 * * After on click status changes according to status props
 * * After click status cant revert to default
 * This is a TypeScript React component that renders a button with a label and allows the user to set a
 * status on click.
 * @param {StatusLabelProps}  - The `StatusLabel` function takes in an object with the following
 * properties:
 * @returns This code is returning a React functional component that renders a button with a label and
 * children. The label has a class name that is determined by the `status` prop and whether or not the
 * button has been clicked (`isActive` state). When the button is clicked, the `onClick` function is
 * called and the `isActive` state is set to `true`.
 */
function StatusLabel({
  status = 'default',
  label,
  children,
  onClick = () => {},
}: StatusLabelProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  /**
   * * Set status label on click
   * * Status can't revert to default
   * This function sets the status to active and triggers an onClick event if isActive is false.
   */
  const onClickSetStatus = (): void => {
    if (!isActive) {
      setIsActive(true);
      onClick();
    }
  };

  const labelStatusClass = `c-status-label--${status}`;

  return (
    <button type="button" onClick={onClickSetStatus}>
      <Label
        className={`${styles['c-status-label']} ${styles[labelStatusClass]} ${
          isActive ? styles['c-status-label--active'] : ''
        }`}
      >
        {label}
        {children}
      </Label>
    </button>
  );
}

export default StatusLabel;
