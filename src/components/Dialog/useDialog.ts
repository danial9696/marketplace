import { useEffect, useState } from 'react';
import { DialogProps } from './DialogProps';

/**
 * The `useDialog` function is a custom hook in TypeScript that manages the state of a dialog component
 * and notifies the parent component of its open/closed state.
 * @param {DialogProps} props - DialogProps, which is a type that defines the properties that can be
 * passed to the useDialog hook. The only property being used in this code is "open", which is a
 * boolean value indicating whether the dialog should be initially open or closed.
 * @returns An object with two properties: `isOpen` and `setIsOpen`.
 */
const useDialog = (props: DialogProps) => {
  const { open = false } = props;

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  /* This `useEffect` hook is checking if the `openHandler` prop is defined and then calling it with the
current state of the `isOpen` variable whenever it changes. This is useful for notifying the parent
component of the dialog's open/closed state. */
  useEffect(() => {
    if (props.openHandler) {
      props.openHandler(isOpen);
    }
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
  };
};

export default useDialog;
