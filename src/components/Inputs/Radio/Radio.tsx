import { Label } from '@radix-ui/react-label';
import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import styles from '@styles/06-components/inputs/_c.radio.module.scss';
import { RadioProps } from './RadioProps';

/**
 * * We use "@radix-ui/react-radio-group" radio group component
 * * We use "@radix-ui/react-label" for labels of inputs
 * This is a TypeScript React component that renders a custom radio group with different options and
 * allows the user to select one option.
 * @param {RadioProps} props - The function `CustomRadio` takes in a single parameter `props`
 * which is of type `RadioProps`. This parameter is an object that contains various properties
 * that are used to customize the behavior and appearance of the radio group component. The properties
 * include `dir` (direction of the text), `
 * @returns A custom radio component written in TypeScript and React. It renders a form with three
 * radio options, each with a label and an indicator. The component also accepts props for direction,
 * orientation, loop, and disabled state. When a radio option is selected, the `getValue` function logs
 * the selected item to the console.
 */
function Radio(props: RadioProps): JSX.Element {
  /**
   * * Get selected radio value
   * The function send value with props to parent component.
   * @param {string} item - The parameter "item" is a string type parameter that represents the value
   */
  const getValue = (item: string): void => {
    props.handlevalueChange(item);
  };

  const { dir = 'rtl' } = props;

  const isLtr = dir === 'ltr';

  const isHorizontal = props.orientation === 'horizontal';

  return (
    <form>
      <Root
        dir={dir}
        orientation={props.orientation}
        loop={props.loop}
        className={`${styles['c-radio']} ${isHorizontal ? styles['c-radio--horizontal'] : ''}`}
        defaultValue={props.defaultValue}
        aria-label={props.ariaLabel}
        onValueChange={getValue}
      >
        {props.data && props.data.length > 0
          ? props.data.map((item) => (
              <div
                key={item.id}
                className={`${styles['c-radio__item']} ${
                  item.disabled ? styles['c-radio__item--disabled'] : ''
                }`}
              >
                <Item
                  disabled={item.disabled}
                  className={styles['c-radio__group']}
                  value={item.value}
                  id={item.value}
                >
                  <Indicator className={styles['c-radio__group-indicator']} />
                </Item>
                <Label
                  className={`${styles['c-radio__label']} ${
                    (isLtr || (!isLtr && isHorizontal)) && 'ms-4'
                  }`}
                  htmlFor={item.id}
                >
                  {item.label}
                </Label>
              </div>
            ))
          : null}
      </Root>
    </form>
  );
}

export default Radio;
