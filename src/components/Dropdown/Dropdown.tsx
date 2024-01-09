import { Content, Item, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import styles from '@styles/06-components/dropdown/dropdown.module.scss';
import Loading from '@components/Loading/Loading';
import { DropdownProps } from './DropdownProps';

/**
 * This is a TypeScript React component for a dropdown menu with customizable items.
 * @param {DropdownProps} props - The parameter `props` is an object that contains the properties
 * passed to the `Dropdown` component. These properties include `ariaLabel`, `icon`, and `items`.
 * @returns A React functional component named "Dropdown" is being returned. It takes in a single
 * parameter "props" of type "DropdownProps". The component returns a div element with class
 * "c-dropdown" containing a Root component, which wraps a Trigger component and a Portal component.
 * The Trigger component contains a button element with class "c-dropdown__icon" and two i elements
 * with class "ic ic-arr
 */
function Dropdown(props: DropdownProps): JSX.Element {
  const { loading = false } = props;

  return (
    <div className={styles['c-dropdown']}>
      <Root dir="rtl">
        <Trigger asChild>
          <button type="button" className={styles['c-dropdown__icon']}>
            <i className="ic ic-arr-chev-down" />
            <i className={`ic ic-${props.icon}`} />
          </button>
        </Trigger>

        <Portal>
          <Content className={styles['c-dropdown__content']} sideOffset={6}>
            {!loading && props.items && props.items.length > 0 ? (
              props.items.map((item) => {
                const hasDetail = item.detail && item.detail?.length > 0;

                return (
                  <Item
                    key={item.id}
                    disabled={item.disabled}
                    className={styles['c-dropdown__item']}
                  >
                    <div className={styles['c-dropdown__item-title']}>
                      <i className={`ic ic-${item.icon}`} />
                      <span className={hasDetail ? 'u-fw-bold' : ''}>{item.title}</span>
                    </div>
                    {hasDetail && (
                      <p className={styles['c-dropdown__item-detail']}>{item.detail}</p>
                    )}
                  </Item>
                );
              })
            ) : (
              <div className={styles['c-dropdown__loading']}>
                <Loading type={2} width={32} height={32} />
              </div>
            )}
          </Content>
        </Portal>
      </Root>
    </div>
  );
}

export default Dropdown;
