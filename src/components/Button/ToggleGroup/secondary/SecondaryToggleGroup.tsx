import { Item, Root } from '@radix-ui/react-toggle-group';
import styles from '@styles/06-components/buttons/_c.secondaryToggleGroup.module.scss';
import SecondaryToggleGroupProps from './SecondaryToggleGroupProps';

/**
 * * This is not real component, just a document component
 * * It is used to show how its used and classes
 * * We use "@radix-ui/react-toggle-group" toggle group component
 * * For more customizations see "https://www.radix-ui.com/docs/primitives/components/toggle-group"
 * This is a TypeScript React component that renders a toggle group with customizable options and sends
 * the selected value(s) to the parent component.
 * @param {SecondaryToggleGroupProps} props - The function `CustomToggleGroup` takes in a single
 * parameter `props` which is of type `SecondaryToggleGroupProps`. This parameter is an object that
 * contains the following properties:
 * @returns A JSX element is being returned, which is a ToggleGroup component with its items mapped
 * from the props passed to the function. The selected value is also passed to the parent component via
 * the `sendValue` prop.
 */
function CustomToggleGroup(props: SecondaryToggleGroupProps): JSX.Element {
  /**
   * * Get selecte value or values[]
   * * Send it as props to parent component
   * This function takes a value (either a string or an array of strings) and sends it to a function
   * called "sendValue" as a parameter.
   * @param {string | string[]} value - The `value` parameter is a string or an array of strings. It is
   * used as an argument for the `getSelectedValue` function.
   */
  const getSelectedValue = (value: string | string[]): void => {
    props.sendValue(value);
  };

  return (
    <Root
      className={styles['c-toggle-group']}
      type={props.type}
      defaultValue={props.defaultValue}
      onValueChange={getSelectedValue}
      aria-label={props.ariaLabel}
    >
      {props.items.map(({ value, ariaLabel, label, icon, id, isDisabled = false }) => (
        <Item
          className={`${styles['c-toggle-group__item']} ${
            isDisabled ? styles['c-toggle-group__item--disabled'] : ''
          }`}
          key={id}
          disabled={isDisabled}
          value={value}
          aria-label={ariaLabel}
        >
          {label && <span>{label}</span>}
          {icon && <i className={icon} />}
        </Item>
      ))}
    </Root>
  );
}

export default CustomToggleGroup;
