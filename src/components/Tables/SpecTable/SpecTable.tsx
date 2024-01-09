import clsx from 'clsx';
import styles from '@styles/06-components/tables/specTable.module.scss';
import SpecTableProps from './SpecTableProps';

// TODO: Design no content mode

/**
 * The function returns a JSX element for a specification table with optional title and content.
 * @param {SpecTableProps} props - The function `SpecTable` takes in a single parameter `props` which
 * is an object containing the following properties:
 * @returns A JSX element is being returned, which contains a div with a class name of "c-spec-table"
 * and an optional custom class name. Inside the div, there may be a title element and a table element
 * with content, or a message indicating that there is no content to display. The table element
 * contains a tbody element with rows of data, each with a title and a value.
 */
function SpecTable(props: SpecTableProps): JSX.Element {
  const { border = true, class: customClass = '' } = props;

  return (
    <div className={customClass}>
      {props.title && props.title.length > 0 ? (
        <h4 className={`${styles['c-spec-table__maintitle']} mb-xxs-3 mb-sm-4`}>
          <i className="ic ic-tick-circle" />
          {props.title}
        </h4>
      ) : null}

      {props.content && props.content.length > 0 ? (
        <table
          className={clsx(styles['c-spec-table__container'], {
            [styles['c-spec-table__container--bordered']]: border,
          })}
        >
          <tbody>
            {props.content.map((item) => (
              <tr className={styles['c-spec-table__item']} key={item.id}>
                <td className={`${styles['c-spec-table__item-title']}  p-sm-4 p-xxs-2`}>
                  {item.title}
                </td>
                <td className={`${styles['c-spec-table__item-value']}  p-sm-4 p-xxs-2`}>
                  {item.value}
                </td>
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

export default SpecTable;
