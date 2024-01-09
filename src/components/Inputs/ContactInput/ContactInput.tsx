import { ReactElement } from 'react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import clsx from 'clsx';
import styles from '@styles/06-components/inputs/_c.contactInput.module.scss';
import Loading from '@components/Loading';
import ContactInputProps from './ContactInputProps';

/**
 * * Has two mode: 'normal' | 'outline'
 * * Pass register and errors from parent as props
 * * For register and errors we use 'react-hook-form' with 'zod'
 * Sample:
 * type ValidationSchema = z.infer<typeof emailValidationSchema>;

  const { register, handleSubmit, formState } = useForm<ValidationSchema>({
    resolver: zodResolver(emailValidationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data): void => {
    alert(data);
  };
 * This is a TypeScript React component for a primary contact input with various states and error
 * handling.
 * @param {ContactInputProps}  - - `type`: the type of input (e.g. "text", "email", "tel")
 */
function ContactInput({
  type,
  variant = 'normal',
  buttonType = 'submit',
  class: CustomClass = '',
  id,
  placeholder = '',
  children,
  iconAccessibilityLabel,
  state = { mode: 'default', text: '' },
  errors,
  registerFn,
}: ContactInputProps) {
  /**
   This is a function that returns a React element based on the value of the `btnState` parameter. The
    `btnState` parameter can have one of four values: 'success', 'error', 'loading', or 'default'. If
    `btnState` is 'success' or 'error', the function returns a `span` element with the `state.text`
    value. If `btnState` is 'loading', the function would return a `Loading` component (although this
    part is currently commented out). If `btnState` is 'default', the function returns an
    `AccessibleIcon` component with the `iconAccessibilityLabel` and `children` props passed in as
    props.
   * @param btnState 
   * @returns 
   */
  const buttonState = (
    btnState: 'success' | 'error' | 'loading' | 'default' = 'default',
  ): ReactElement => {
    switch (btnState) {
      case 'success':
        return <span>{state.text}</span>;

      case 'error':
        return <span>{state.text}</span>;

      case 'loading':
        return <Loading type={1} />;

      default:
        return <AccessibleIcon label={iconAccessibilityLabel}>{children}</AccessibleIcon>;
    }
  };

  const isOutlined = variant === 'outline';

  return (
    <div className={`${styles['c-contact-input']} ${CustomClass}`}>
      <div
        className={clsx(styles['c-contact-input__wrapper'], {
          [styles['c-contact-input__wrapper--outline']]: isOutlined,
        })}
      >
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <input type={type} placeholder={placeholder} id={`contact-input-${id}`} {...registerFn} />

        <button
          // eslint-disable-next-line react/button-has-type
          type={buttonType}
          className={clsx(styles['c-contact-input__submit'], {
            [styles['c-contact-input__submit--success']]: state.mode === 'success',
            [styles['c-contact-input__submit--error']]: state.mode === 'error',
            [styles['c-contact-input__submit--loading']]: state.mode === 'loading',
          })}
        >
          {buttonState(state.mode)}
        </button>
      </div>

      {errors && errors[id] && (
        <span className={styles['c-contact-input__error']}>{errors[id].message}</span>
      )}
    </div>
  );
}

export default ContactInput;
