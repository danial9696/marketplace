import { Root, Thumb } from '@radix-ui/react-switch';
import { Label } from '@radix-ui/react-label';
import styles from '@styles/06-components/inputs/_c.switch.module.scss';
import SwitchProps from './SwitchProps';

/**
 * This is a TypeScript React function that renders a switch component with a label and a slider.
 * @param {SwitchProps} props - The `props` parameter is an object that contains the properties
 * passed to the `MainSwitch` component. These properties include `disabled`, `ariaLabel`, `label`, and
 * `id`.
 */
function Switch(props: SwitchProps): JSX.Element {
  return (
    <div
      className={`${styles['c-switch']} ${props.disabled ? styles['c-switch--disabled'] : ''} `}
      aria-label={props.ariaLabel}
    >
      <Label className={styles['c-switch__label']}>{props.label}</Label>
      <Root disabled={props.disabled} className={styles['c-switch__slider']} id={props.id}>
        <Thumb className={styles['c-switch__thumb']} />
      </Root>
    </div>
  );
}

export default Switch;
