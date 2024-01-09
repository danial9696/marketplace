import { useEffect, useState } from 'react';
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion';
import clsx from 'clsx';
import styles from '@styles/06-components/accordion/accordion.module.scss';
import Loading from '@components/Loading';
import { SecondaryButton } from '@components/Button';
import { AccordionProps } from './AccordionProps';

/** This is a functional component in TypeScript React that renders an accordion UI component. It takes
in an object of props of type `AccordionProps` and returns a JSX element. The component checks if it
has a header and if it does, it renders the header title and text. It also checks if it should have
a border and applies the appropriate CSS class. The component then renders the accordion items using
the data passed in through props, and sets up the accordion functionality using the `Root`, `Item`,
`Header`, and `Content` components from the `@radix-ui/react-accordion` library. The commented out
code at the end is an example of how to manually control the accordion state using a button. 
* @param {AccordionProps} props 
*/
function Accordion(props: AccordionProps): JSX.Element {
  const [isLoading, setLoading] = useState(props.isLoading ?? false);

  const [value, setValue] = useState<any>(props.defaultValue);

  useEffect(() => {
    setLoading(props.isLoading);
  }, [props.isLoading]);

  /* These constants are then used in the
  component to conditionally render the header title and text if they exist. */
  const hasHeader = props.header;

  const hasHeaderText = hasHeader && hasHeader.text && hasHeader.text?.length > 0;

  const hasBorder = props.bordered;

  const { collapseAll = false } = props;

  /**
   * This function takes in a string or an array of strings as an argument and sets it as the value of a
   * state variable.
   * @param {string | string[]} accValue - The accValue parameter is a string or an array of strings
   * that represents the new value that needs to be handled.
   */
  const handleValueChange = (accValue: string | string[]): void => {
    setValue(accValue);
  };

  /**
   * The function onClickCloseAll sets an empty array as the value.
   */
  const onClickCloseAll = (): void => {
    setValue([]);
  };

  return (
    <>
      <div
        className={clsx(styles['c-accordion'], {
          [styles['c-accordion--bordered']]: hasBorder,
          'pt-6': hasHeader && hasBorder,
          'pt-0': !hasHeader,
        })}
      >
        {hasHeader && (
          <div className="c-accordion__header px-xxs-6 mb-xxs-4 mb-md-9">
            <h4 className={styles['c-accordion__header-title']}>{hasHeader.title}</h4>
            {hasHeaderText && (
              <p className={styles['c-accordion__header-text']}>{hasHeader.text}</p>
            )}
          </div>
        )}

        <Root
          value={value}
          onValueChange={handleValueChange}
          className={styles['c-accordion__root']}
          type={props.type}
          collapsible
        >
          {props.data && props.data.length > 0
            ? props.data.map((item) => (
                <Item
                  className={`${styles['c-accordion__item']} mx-lg-6 mx-xxs-0 px-xxs-6 `}
                  value={item.value}
                  key={item.id}
                >
                  <Header className={styles['c-accordion__item-header']}>
                    <Trigger>
                      <p>{item.header}</p>
                    </Trigger>
                  </Header>

                  <Content className={styles['c-accordion__item-content']}>
                    {isLoading ? (
                      <div className="d-flex justify-content-center align-items-center my-3">
                        <Loading type={2} />
                      </div>
                    ) : (
                      item.content
                    )}
                  </Content>
                </Item>
              ))
            : null}
        </Root>
      </div>

      {collapseAll && (
        <SecondaryButton class="mx-auto mt-6" onClick={onClickCloseAll} label="بستن همه">
          <i className="ic-arr-chev-left" />
        </SecondaryButton>
      )}
    </>
  );
}

export default Accordion;
