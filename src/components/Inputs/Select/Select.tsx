import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import * as Select from '@radix-ui/react-select';
import { Label } from '@radix-ui/react-label';
import { SelectItem } from '@radix-ui/react-select';
import styles from '@styles/06-components/inputs/_c.select.module.scss';
import { CustomSelectProps } from './SelectProps';

/**
 * * Custom select with 2 mode:
 * * 1- Only select from items
 * * 2- Can write in search field
 * This is a TypeScript React component for a custom select input with search functionality and scroll
 * buttons.
 * @param {CustomSelectProps} props - The function `CustomSelect` takes in a single parameter `props`
 * of type `CustomSelectProps`. This parameter is an object that contains various properties used to
 * configure and render the custom select component.
 */
function CustomSelect(props: CustomSelectProps): JSX.Element {
  // * For list with more than 5 item show the scrolls buttons
  const hasScrollButtons = props.data.length > 5;

  const [val, setVal] = useState('');

  // const [searchVal, setSearchVal] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const { isLoading = false } = props;

  /**
   * * Get the selected item value and send it as props
   * @param value
   * @returns void
   */
  const getSelectValue = (value: string): void => {
    setVal(value);
    props.getSelectedValue(value);
  };

  /**
   * * Set search value when for input value
   * @param event { target: { value: SetStateAction<string> } }
   * @returns void
   */
  const onChangeSearchVal = (event: { target: { value: SetStateAction<string> } }): void => {
    // setSearchVal(event.target.value);
    setVal(event.target.value);
  };

  /**
   * * Toggle open select
   * @param open boolean
   * @returns void
   */
  const toggleSelect = (open: boolean = isOpen) => {
    setIsOpen(open);
  };

  /**
   * * Loop over props.data as select items to create select items
   * * If list is empty, shows an info message
   */
  const SelectItems =
    props.data && props.data.length > 0 ? (
      props.data.map((item) => (
        <SelectItem
          className={`${styles['c-select__item']} ${
            item.isDisabled && styles['c-select__item--disabled']
          }`}
          key={item.id}
          disabled={item.isDisabled}
          value={item.value}
        >
          <Select.ItemText className={styles['c-select__text']}>{item.title}</Select.ItemText>
        </SelectItem>
      ))
    ) : (
      <p className="text-center u-detail2">موردی برای نمایش وجود ندارد.</p>
    );

  return (
    <Select.Root open onOpenChange={toggleSelect} onValueChange={getSelectValue}>
      <div className={styles['c-select']}>
        <Label className={styles['c-select__label']}>{props.label}</Label>
        {props.canSearch && (
          <input
            className={styles['c-select__input']}
            type="text"
            name="searchVal"
            id="searchVal"
            value={val}
            onChange={onChangeSearchVal}
            onClick={() => toggleSelect(true)}
          />
        )}

        <Select.Trigger className={styles['c-select__trigger']} aria-label={props.ariaLabel}>
          <Select.Icon className={styles['c-select__icon']}>
            <i className="ic-arr-chev-down" />
          </Select.Icon>

          <Select.Value placeholder={props.placeholder}>
            {/* {props.canSearch ? searchVal : val} */}
          </Select.Value>
        </Select.Trigger>

        <Select.Portal className={styles['c-select__protal']}>
          <Select.Content position="popper" className={styles['c-select__content']}>
            {hasScrollButtons && (
              <Select.ScrollUpButton className={styles['c-select__scrollbtn']}>
                <i className="ic-arr-chev-up" />
              </Select.ScrollUpButton>
            )}

            <Select.Viewport
              className={`${styles['c-select__viewport']} ${
                hasScrollButtons && styles['c-select__viewport--scroll']
              }`}
            >
              {!isLoading ? (
                SelectItems
              ) : (
                <div className={styles['c-select__loading']}>
                  <Image
                    src="/images/loadings/dot-loading.gif"
                    alt="loading"
                    width={32}
                    height={32}
                  />
                </div>
              )}
            </Select.Viewport>

            {hasScrollButtons && (
              <Select.ScrollDownButton className={styles['c-select__scrollbtn']}>
                <i className="ic-arr-chev-down" />
              </Select.ScrollDownButton>
            )}
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  );
}

export default CustomSelect;
