import { useEffect, useState } from 'react';
import { Action, Close, Description, Provider, Root, Title, Viewport } from '@radix-ui/react-toast';
import styles from '@styles/06-components/toast/toast.module.scss';
import ToastProps from './ToastProps';

/**
 * This is a TypeScript React component for rendering a toast notification with customizable status,
 * direction, and open state.
 * @param {ToastProps} props - The function `Toast` takes in a single parameter `props` of type
 * `ToastProps`, which is an interface defining the props that can be passed to the component. The
 * props include `status`, `direction`, `open`, `ariaLabel`, `title`, `description`, and `action`.
 * @returns A JSX element representing a toast component.
 */
function Toast(props: ToastProps): JSX.Element {
  const { status = 'info', direction = 'top', open = false } = props;

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  /* This `useEffect` hook is checking if the `openHandler` prop is defined and then calling it with the
 current value of `isOpen` whenever `isOpen` changes. This is likely used to notify the parent
 component of changes to the toast's open state. */
  useEffect(() => {
    if (props.openHandler) {
      props.openHandler(isOpen);
    }
  }, [isOpen]);

  const statusStyle = styles[`c-toast--${status}`];

  const viewportDirectionStyle = styles[`c-toast__viewport--${direction}`];

  return (
    <div>
      <Provider label={props.ariaLabel ?? ''}>
        <Root
          className={`${styles['c-toast']} ${statusStyle}`}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <Close type="button" className={styles['c-toast__close']}>
            <i className="ic ic-close" />
          </Close>

          <div className={styles['c-toast__wrapper']}>
            <div>
              <Title className={styles['c-toast__title']} asChild>
                <p>{props.title}</p>
              </Title>

              {props.description ? (
                <Description className={styles['c-toast__description']} asChild>
                  <p>{props.description}</p>
                </Description>
              ) : null}
            </div>

            {props.action && props.action.title ? (
              <Action
                className={styles['c-toast__action']}
                altText={props.action.altText ?? ''}
                onClick={props.action.onClick}
              >
                {props.action.title}
              </Action>
            ) : null}
          </div>
        </Root>

        <Viewport className={`${styles['c-toast__viewport']} ${viewportDirectionStyle}`} />
      </Provider>
    </div>
  );
}

export default Toast;
