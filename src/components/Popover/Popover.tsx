import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import styles from '@styles/06-components/popover/popover.module.scss';
import { PopoverProps } from './PopoverProps';

/**
 * This is a TypeScript React component for a popover with customizable side and class.
 * @param {PopoverProps} props - The function `Popover` takes in a single parameter `props` which is of
 * type `PopoverProps`. This parameter is an object that contains the following optional properties:
 * @returns a JSX element, which is a div containing a Root component, a Trigger component, a Portal
 * component, a Content component, and an Arrow component. The Root, Trigger, Portal, Content, and
 * Arrow components are imported from a library, and the PopoverProps interface is defined elsewhere.
 * The JSX element has some dynamic properties based on the props passed to the function, such as
 */
function Popover(props: PopoverProps): JSX.Element {
  const { side = 'bottom', class: customClass = '' } = props;

  return (
    <div className={`${styles['c-popover']} ${customClass}`}>
      <Root>
        <Trigger asChild>{props.trigger}</Trigger>

        <Portal>
          <Content
            align="start"
            sideOffset={2}
            side={side}
            className={styles['c-popover__content']}
          >
            {props.children}
            <Arrow width={13} height={6} className={styles['c-popover__arrow']} />
          </Content>
        </Portal>
      </Root>
    </div>
  );
}

export default Popover;
