import { Arrow, Content, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import styles from '@styles/06-components/access/access.module.scss';
import { AccessProps } from './AccessProps';

/** This is  functional component in TypeScript React that renders an accessibility menu with various
items. It takes in an object of props of type `AccessProps` and returns a JSX element. The `side`
variable is used to dynamically set the class name of the `ul` element based on the `side` prop
passed in. The component then maps through the `items` prop and renders a `li` element for each
item. Each `li` element contains a `button` element that triggers a tooltip when hovered over. The
tooltip is created using the `@radix-ui/react-tooltip` library and contains information about the
item, such as its title and icon. 
* @param {AccessProps} props - The function `Dialog` takes in a single parameter `props` of type */
function Access(props: AccessProps): JSX.Element {
  const side = `c-access__items--${props.side}`;

  return (
    <div className={styles['c-access']}>
      <ul className={`${styles['c-access__items']} ${styles[side]}`}>
        {props.items &&
          props.items.length > 0 &&
          props.items.map((item) => (
            <li key={item.id} className={styles['c-access__item']}>
              <Provider>
                <Root delayDuration={props.tooltipDelay}>
                  <Trigger asChild>
                    <button
                      type="button"
                      aria-label={`$scroll-to-${item.target}`}
                      // onClick={() => item.onClick(item.target)}
                      className={styles['c-access__trigger']}
                    >
                      <i className={`ic ic-${item.icon}`} />
                    </button>
                  </Trigger>

                  <Portal>
                    <Content
                      className={styles['c-access__content']}
                      aria-label={item.ariaLabel}
                      side={item.side}
                      sideOffset={9}
                    >
                      <span className={styles['c-access__content-title']}>{item.title}</span>
                      <Arrow className={styles['c-access__content-arrow']} />
                    </Content>
                  </Portal>
                </Root>
              </Provider>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Access;
