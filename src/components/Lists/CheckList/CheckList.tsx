import Image from 'next/image';
import clsx from 'clsx';
import { RadioGroup, Indicator, Item } from '@radix-ui/react-radio-group';
import styles from '@styles/06-components/lists/checkList.module.scss';
import { IconButton } from '@components/Button';
import CheckBox from '@components/Inputs/Checkbox';
import { addCommas } from '@lib/utils';
import { CheckListProps } from './CheckListProps';

// TODO: Button on click => Open a modal, from map select a location
// TODO: Add time table with chosable item to secondary mode

/* This is a functional component in TypeScript React that renders a radio group with a list of items.
The component takes in props of type `CheckListProps` which includes the `type` of the list (primary
or secondary), `error` status, `title`, `data` (an array of objects representing each item in the
list), `defaultValue`, `ariaLabel`, and a `handleValueChange` function to handle the selected value. */
function CheckList(props: CheckListProps): JSX.Element {
  const { type, error = false } = props;

  /**
   * * Get selected radio value
   * The function send value with props to parent component.
   * @param {string} value - The parameter "value" is a string type parameter that represents the value
   */
  const getValue = (value: string): void => {
    console.log(value);
    props.handleValueChange(value);
  };

  const onCheckSubItem = (check: boolean | 'indeterminate', id: string): void => {
    console.log(check, id);
    // TODO: Handle add sub item price when clicked
  };

  return (
    <>
      {props.title ? <h5 className="u-h3">{props.title}</h5> : null}

      <RadioGroup
        dir="rtl"
        onValueChange={getValue}
        defaultValue={props.defaultValue ?? ''}
        aria-label={props.ariaLabel ?? ''}
        className={clsx(
          `${styles['c-check-list']} py-xxs-3 py-md-4 py-xl-6 px-xxs-2 px-md-3 px--xl-5`,
          {
            [styles['c-check-list--error']]: error,
          },
        )}
      >
        {props.data && props.data.length > 0
          ? props.data.map((item) => (
              <Item
                key={item.value}
                asChild
                id={item.id}
                value={item.value}
                disabled={item.disabled}
                className={clsx(styles['c-check-list__item'], {
                  [styles['c-check-list__item--primary']]: type === 'primary',
                  [styles['c-check-list__item--secondary']]: type === 'secondary',
                })}
              >
                <div>
                  <div
                    className={clsx(styles['c-check-list__content'], {
                      [styles['c-check-list__content--primary']]: type === 'primary',
                      [styles['c-check-list__content--secondary']]: type === 'secondary',
                    })}
                  >
                    {type === 'primary' && props.icon && <i className={`ic ic-${props.icon}`} />}

                    {type === 'secondary' && (
                      <Image className="ms-5" src={item.src ?? ''} alt="" width={79} height={79} />
                    )}

                    <div className={styles['c-check-list__content-wrapper']}>
                      {type === 'secondary' && item.title && (
                        <h6 className={styles['c-check-list__content-title']}>{item.title}</h6>
                      )}

                      <p className={styles['c-check-list__content-description']}>
                        {item.desription}
                      </p>

                      {type === 'secondary' && item.info && (
                        <span className={styles['c-check-list__content-info']}>{item.info}</span>
                      )}

                      {type === 'secondary' && item.subinfo && (
                        <CheckBox
                          onCheck={onCheckSubItem}
                          class="mt-4"
                          label={`${item.subinfo.text} ${addCommas(item.subinfo.price)} تومان`}
                          id={item.value}
                          type="contained"
                          status="info"
                        />
                      )}
                    </div>
                  </div>

                  <Indicator className={styles['c-check-list__indicator']}>
                    <i className="ic ic-tick-circle" />
                  </Indicator>
                </div>
              </Item>
            ))
          : null}

        {props.button && props.button.title.length > 0 ? (
          <IconButton class="mx-auto mt-4" label="افزودن نظر جدید" onClick={() => {}}>
            <i className="ic-plus-circle" />
          </IconButton>
        ) : null}
      </RadioGroup>
    </>
  );
}

export default CheckList;
