import { Arrow, Content, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import styles from '@styles/06-components/tooltip/tooltip.module.scss';
import TooltipProps from './TooltipProps';

/**
 * This is a TypeScript React function that renders a tooltip component with customizable positioning.
 * @param {TooltipProps} props - The function `Tooltip` takes in a single parameter `props` which is of
 * type `TooltipProps`. `TooltipProps` is likely an interface or type that defines the expected shape
 * of the `props` object passed to the `Tooltip` component. The `props` object likely contains
 * properties such as
 * @returns A JSX element representing a Tooltip component.
 */
function Tooltip(props: TooltipProps): JSX.Element {
  const { side = 'top' } = props;

  return (
    <Provider>
      <Root>
        <Trigger asChild>{props.trigger}</Trigger>

        <Portal className={styles['c-tooltip']}>
          <Content side={side} className={styles['c-tooltip__content']} sideOffset={-6}>
            {props.children}

            <Arrow width={13} height={6} className={styles['c-tooltip__arrow']} />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
}

export default Tooltip;
