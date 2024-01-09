import Image from 'next/image';
import styles from '@styles/06-components/tables/comparisonTable.module.scss';
import { addCommas } from '@lib/utils';
import { useEffect } from 'react';
import ComparisonTableProps from './ComparisonTableProps';

/* This is a functional component called `ComparisionTable` that takes in a single prop called `props`
of type `ComparisonTableProps`. It renders a table that compares different products based on their
attributes such as price, image, and other features. */
function ComparisionTable(props: ComparisonTableProps): JSX.Element {
  const productsNum = props.content.length;

  useEffect(() => {
    /* `document.documentElement.style.setProperty('--items-num', ``);` is setting a CSS
    custom property `--items-num` to the value of `productsNum`. This custom property can then be
    used in the CSS of the component or any of its child elements. In this specific case, it is
    being used to dynamically set the number of items in the table, which can be used to adjust the
    layout or styling of the table accordingly. */
    document.documentElement.style.setProperty('--items-num', `${productsNum}`);
  }, []);

  // const newArr = { title: props.content.map((item) => item.title)  };

  return (
    <div className={`${styles['c-comp-table']} pt-6 px-4 pb-4`}>
      <h3 className="mb-6">{props.title ?? ''}</h3>

      {props.content && props.content.length > 0 ? (
        <table>
          <tbody className={styles['c-comp-table__body']} aria-label={props.ariaLabel ?? ''}>
            {props.content.map((item) => (
              <tr className={`${styles['c-comp-table__item']} px-lg-4 px-xxs-2`} key={item.id}>
                <td className={`${styles['c-comp-table__item-img']} mb-xxs-4 mb-md-10`}>
                  <Image src={item.src} alt={item.alt ?? ''} fill />
                </td>

                <td className={styles['c-comp-table__item-title']}>
                  <h4>{item.title}</h4>
                </td>

                <td className={styles['c-comp-table__item-price']}>
                  {!item.price && !item.offPrice ? (
                    <p className="mt-5">ناموجود</p>
                  ) : (
                    <>
                      <span
                        className={
                          item.offPrice
                            ? `mt-3 ${styles['c-comp-table__item-mainprice']}`
                            : `mt-5 ${styles['c-comp-table__item-mainprice--default']}`
                        }
                      >
                        <span>{addCommas(item.price ?? 0)}</span>
                        <span>تومان</span>
                      </span>

                      {item.offPrice ? (
                        <span className={styles['c-comp-table__item-offprice']}>
                          <span>{addCommas(item.offPrice)}</span>

                          <span>تومان</span>
                        </span>
                      ) : null}
                    </>
                  )}
                </td>

                {item.attr && item.attr.length > 0
                  ? item.attr.map((attr, index) => (
                      <td
                        data-attr={`cell-${item.id}-${index}`}
                        className={styles['c-comp-table__item-attr']}
                        key={attr.id}
                      >
                        <i className={`ic ic-${attr.icon}`} />

                        <div>
                          <span
                            className={styles['c-comp-table__item-attr-title']}
                          >{`${attr.title}:`}</span>

                          <span className={styles['c-comp-table__item-attr-value']}>
                            {attr.value}
                          </span>
                        </div>
                      </td>
                    ))
                  : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="u-subheader1 text-center mt-8">موردی برای نمایش وجود ندارد.</p>
      )}
    </div>
  );
}

export default ComparisionTable;
