import { useState, lazy, Suspense } from 'react';
import { IconButton } from '@components/Button';
import styles from '@styles/06-components/lists/actionList.module.scss';
import { ActionListProps } from './ActionListProps';

const Dialog = lazy(() => import('@components/Dialog'));

// TODO: Add onClick edit button and  => opens modal and choose a location from map
// TODO: Must add toast when get result from server, show a toast tell user to wait and disable buttons from clicking

/* This is a functional component in TypeScript React that renders a list of items with actions. It
takes in a `props` object of type `ActionListProps` which contains the `header` and `content` data
for the list. The component uses the `useState` hook to manage the state of `data`, `isOpen`, and
`id`. It also uses the `lazy` function from React to asynchronously load the `Dialog` component. */
function ActionList(props: ActionListProps): JSX.Element {
  const [data, setData] = useState(props.content);

  const [isOpen, setIsOpen] = useState(false);

  const [id, setId] = useState('');

  const { header } = props;

  /**
   * This function sets the state of a modal to open and sets the ID of an item to be deleted.
   * @param {string} toDeleteId - The parameter `toDeleteId` is a string that represents the ID of the
   * item that the user wants to delete. It is used in the `onClickOpenModal` function to set the `id`
   * state variable to the ID of the item that the user wants to delete.
   */
  const onClickOpenModal = (toDeleteId: string) => {
    setIsOpen(true);
    setId(toDeleteId);
  };

  /**
   * This function filters an array of data based on a specific id and updates the state with the
   * filtered items.
   */
  const onConfirmDeleteItem = () => {
    const filteredItems = data.filter((item) => item.id !== id);
    // ! Must call an api and get confirmation for deleting, settimeout is for simulating
    setTimeout(() => {
      setData(filteredItems);
    }, 4000);
  };

  /**
   * This is a TypeScript React function that sets the state of a dialog box to open or closed based on
   * a boolean value.
   * @param {boolean} item - The parameter "item" is of type boolean, which means it can only have two
   * possible values: true or false. It is used as an argument in the function to set the state of the
   * "isOpen" variable. If "item" is true, then "isOpen" will be set to true
   */
  const dialogOpenHandler = (item: boolean) => setIsOpen(item);

  return (
    <div className={`${styles['c-action-list']} px-xxs-3 px-sm-4 py-xxs-5 py-sm-6`}>
      {/* Header items */}
      {header ? (
        <div className={styles['c-action-list__header']}>
          {props.header?.title ? (
            <h6 className={styles['c-action-list__header-title']}>{header?.title}</h6>
          ) : null}

          {header.button ? (
            <IconButton status="danger" label={header.button.title} onClick={() => {}} secondary>
              <i className={`ic ic-${header.button.icon}`} />
            </IconButton>
          ) : null}
        </div>
      ) : null}

      {/* Contens */}
      {data && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className={`${styles['c-action-list__item']} mb-xxs-4 mb-sm-5 mt-xxs-6 mb-sm-8 pb-xxs-4 pb-sm-6`}
            >
              {item.header ? (
                <div className={styles['c-action-list__item-wrapper']}>
                  {item.header.info.length > 0 ? (
                    <ul className={`${styles['c-action-list__item-info']} mb-xxs-4 mb-sm-5`}>
                      {item.header.info.map((info, index) => {
                        const hide = index >= 2;
                        return (
                          <li key={info.title} className={hide ? 'd-xxs-none d-sm-block' : ''}>
                            <b>{info.title}</b>
                            <span>{info.data}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}

                  <div className={styles['c-action-list__item-btn']}>
                    <button type="button" className={styles['c-action-list__item-btn--custom']}>
                      <i className="ic ic-exit" />
                    </button>

                    <button
                      onClick={() => onClickOpenModal(item.id)}
                      type="button"
                      className={styles['c-action-list__item-btn--delete']}
                    >
                      <i className="ic ic-trash" />
                    </button>
                  </div>

                  <p className={styles['c-action-list__item-description']}>
                    {item.description ?? 'None'}
                  </p>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Dialog */}
      <Suspense>
        <Dialog
          confirm={{
            text: 'پاک کن',
            onConfirm: onConfirmDeleteItem,
          }}
          cancel={{
            text: 'خیرررر!',
            onCancel: () => {},
          }}
          centerFooter
          open={isOpen}
          openHandler={dialogOpenHandler}
        >
          <p className="my-4 text-center u-subheader1">آیا از حذف این مورد مطمین هستید؟</p>
        </Dialog>
      </Suspense>
    </div>
  );
}

export default ActionList;
