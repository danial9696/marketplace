import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-alert-dialog';
import { ActionButton } from '@components/Button';
import Loading from '@components/Loading';
import styles from '@styles/06-components/dialog/dialog.module.scss';
import { DialogProps } from './DialogProps';
import useDialog from './useDialog';

// TODO: Edit mobile mode, dialog opens from bottom

/**
 * This is a TypeScript React function that renders a dialog box with customizable content and buttons.
 *
 * @param {DialogProps} props - The function `Dialog` takes in a single parameter `props` of type behavior and appearance of the dialog component. The properties include `title`, `trigger`,
 * `centerFooter`, `confirm`, `custom`, 'loading' and
 * @returns A JSX element representing a dialog component.
 */
function Dialog(props: DialogProps): JSX.Element {
  const { centerFooter = false, loading = false } = props;

  const hasFooter = props.confirm || props.cancel || props.custom;

  const hasTitle = props.title && props.title?.length > 0;

  const { isOpen, setIsOpen } = useDialog(props);

  return (
    <Root onOpenChange={setIsOpen} open={isOpen}>
      {props.trigger ? <Trigger asChild>{props.trigger}</Trigger> : null}

      <Portal>
        <Overlay className={styles['c-dialog__overlay']} />

        <Content className={styles['c-dialog__content']}>
          {!loading && (
            <Title
              className={`${styles['c-dialog__header']} ${
                hasTitle ? styles['c-dialog__header--has-border'] : ''
              }`}
            >
              {hasTitle && <span>{props.title}</span>}

              <Cancel asChild>
                <button type="button" aria-label="close-popup">
                  <i className="ic ic-close" />
                </button>
              </Cancel>
            </Title>
          )}

          <Description asChild className={styles['c-dialog__description']}>
            {!loading ? (
              props.children
            ) : (
              <div className={styles['c-dialog__loading']}>
                <span>در حال بارگذاری</span>
                <Loading type={3} width={132} height={12} />
              </div>
            )}
          </Description>

          {!loading && hasFooter && (
            <div
              className={`${styles['c-dialog__footer']} ${
                centerFooter ? 'justify-content-center' : ''
              }`}
            >
              {props.confirm && props.confirm.text.length > 0 && (
                <Action asChild>
                  <ActionButton
                    label={props.confirm.text}
                    onClick={props.confirm.onConfirm}
                    disabled={props.confirm.disabled}
                    size="sm"
                    type="button"
                    class="w-auto"
                  />
                </Action>
              )}

              {props.custom && props.custom.text.length > 0 && (
                <Action asChild>
                  <ActionButton
                    label={props.custom.text}
                    onClick={props.custom.onClick}
                    disabled={props.custom.disabled}
                    size="sm"
                    type="button"
                    class="w-auto"
                  />
                </Action>
              )}

              {props.cancel && props.cancel.text.length > 0 && (
                <Cancel asChild>
                  <ActionButton
                    label={props.cancel.text}
                    onClick={props.cancel.onCancel}
                    disabled={props.cancel.disabled}
                    secondary
                    size="sm"
                    type="button"
                    class="w-auto"
                  />
                </Cancel>
              )}
            </div>
          )}
        </Content>
      </Portal>
    </Root>
  );
}

export default Dialog;
