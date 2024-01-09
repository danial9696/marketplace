import { Suspense, lazy } from 'react';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import { Root as ScrollRoot, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import { LinkButton } from '@components/Button';
import styles from '@styles/06-components/tabs/tabs.module.scss';
import { StickyListContent } from '@components/Lists/Sticky/StickyListProps';
import { useWindowSize } from '@lib/hooks';
import Loading from '@components/Loading';
import { TabsProps } from './TabsProps';

/**
 * This is a TypeScript React component for rendering tabs with customizable headers and contents.
 * @param {TabsProps} props - The parameter `props` is an object that contains the props passed to the
 * `Tabs` component. It may contain the following properties:
 * @returns A JSX element representing a Tabs component.
 */
function Tabs(props: TabsProps): JSX.Element {
  const StickyList = lazy(() => import('@components/Lists/Sticky/StickyList'));

  const { width } = useWindowSize();

  const showSticky = props.type === 'secondary' && width && width < 768;

  const { bordered = false, defaultValue = '' } = props;

  const StickyListContentsItems: StickyListContent[] =
    props.contents && props.contents.length > 0
      ? props.contents.map((item) => ({
          id: '',
          data: item.content,
          title: item.secondaryMobileItems?.title ?? '',
          icon: item.secondaryMobileItems?.icon ?? '',
        }))
      : [];

  return (
    <div
      className={clsx(styles['c-tabs'], {
        [`${styles['c-tabs--bordered']} p-xxs-2 p-md-6`]: bordered,
      })}
    >
      {props.header ? (
        <div className={styles['c-tabs__haeder']}>
          <h5 className="u-h3 m-0">{props.header.title}</h5>

          {props.header.link ? (
            <LinkButton href={props.header.link.href} label={props.header.title} />
          ) : null}
        </div>
      ) : null}

      {!showSticky ? (
        <Root dir="rtl" className={styles['c-tabs__root']} defaultValue={defaultValue}>
          <ScrollRoot dir="rtl" className="o-scrollbar">
            <Viewport className="o-scrollbar__viewport">
              <List
                className={clsx(styles['c-tabs__haeder-list'], {
                  [`${styles['c-tabs__haeder-list--primary']} ms-12`]: props.type === 'primary',

                  [`${styles['c-tabs__haeder-list--secondary']}`]: props.type === 'secondary',

                  [`${styles['c-tabs__haeder-list--icon']}`]: props.type === 'icon',
                })}
                aria-label={props.ariaLabel}
              >
                {props.trigerrs && props.trigerrs.length > 0
                  ? props.trigerrs.map((item) => (
                      <Trigger
                        className={clsx(styles['c-tabs__haeder-item'], {
                          [`${styles['c-tabs__haeder-item--primary']} ms-12`]:
                            props.type === 'primary',

                          [`${styles['c-tabs__haeder-item--secondary']}`]:
                            props.type === 'secondary',

                          [`${styles['c-tabs__haeder-item--icon']}`]: props.type === 'icon',
                        })}
                        key={item.value}
                        value={item.value}
                      >
                        {item.icon ? <i className={`ic ic-${item.icon}`} /> : null}
                        <span>{item.title}</span>
                      </Trigger>
                    ))
                  : null}
              </List>
            </Viewport>

            <Scrollbar className="o-scrollbar__area" orientation="horizontal">
              <Thumb className="o-scrollbar__thumb" />
            </Scrollbar>
          </ScrollRoot>

          {props.contents && props.contents.length > 0
            ? props.contents.map((item) => (
                <Content className="mw-100 mt-md-8 mt-xxs-4" key={item.value} value={item.value}>
                  {item.content ? (
                    item.content
                  ) : (
                    <p className="u-h3 text-center mt-md-8 mt-xxs-4">
                      موردی برای نمایش وجود ندارد.
                    </p>
                  )}
                </Content>
              ))
            : null}
        </Root>
      ) : (
        <Suspense fallback={<Loading type={1} />}>
          <StickyList items={[]} contents={StickyListContentsItems} />
        </Suspense>
      )}
    </div>
  );
}

export default Tabs;
