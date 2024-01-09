import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import styles from '@styles/06-components/tables/customTable.module.scss';
import CustomTableProps from './CustomTableProps';

/* The `OrderTable` function is defining a React component that renders a custom table. It takes in a
single parameter `props` of type `CustomTableProps`, which contains the header and content data for
the table. The function returns a JSX element that renders the table using the
`@radix-ui/react-scroll-area` library for scrollable content. The table is wrapped in a `div`
element with a class name of `c-order-table`. The `Root` component from the
`@radix-ui/react-scroll-area` library is used to create a scrollable container for the table. The
`Viewport` component is used to define the visible area of the scrollable container, and the
`Scrollbar` component is used to create a horizontal scrollbar for the container. The `Thumb`
component is used to define the draggable thumb of the scrollbar. The table itself is defined using
a `table` element with a class name of `c-order-table__wrapper`. The header and content data are
mapped over to create the table rows and cells. If there is no content data, a message is displayed
instead. Finally, there is a button with a chevron icon that is used to navigate to */
function OrderTable(props: CustomTableProps): JSX.Element {
  return (
    <div className={styles['c-order-table']}>
      <Root dir="rtl" type="auto" className="o-scrollbar">
        <Viewport className="o-scrollbar__viewport">
          <table className={styles['c-order-table__wrapper']}>
            {props.header && props.header.length > 0 ? (
              <thead className={styles['c-order-table__header']}>
                <tr className={styles['c-order-table__header-item']}>
                  {props.header.map((head) => (
                    <th key={head.id} className="py-3 px-xxs-9 px-sm-13">
                      {head.title}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}

            {props.content && props.content.length > 0 ? (
              <tbody className={styles['c-order-table__body']}>
                {props.content.map((arr) => {
                  const { disabled = false } = arr;

                  return (
                    <tr
                      key={arr.id}
                      data-state={disabled ? 'disabled' : ''}
                      className={clsx(styles['c-order-table__body-item'], {
                        [styles['c-order-table__body-item--disabled']]: disabled,
                      })}
                    >
                      {arr.data.map((item) => (
                        <td key={arr.id} className="py-3 px-xxs-9 px-sm-13">
                          {item.value}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <p className="u-subheader1 text-center mt-8">موردی برای نمایش وجود ندارد.</p>
            )}
          </table>
        </Viewport>

        <Scrollbar
          className={`o-scrollbar__area o-scrollbar__area--full-scroll ${styles['c-order-table__scroll']}`}
          orientation="horizontal"
        >
          <Thumb className="o-scrollbar__thumb" />
        </Scrollbar>

        <button className={styles['c-order-table__btn']} type="button">
          <i className="ic ic-arr-chev-left" />
        </button>
      </Root>
    </div>
  );
}

export default OrderTable;
