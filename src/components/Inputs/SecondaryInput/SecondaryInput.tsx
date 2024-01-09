import { useState } from 'react';
import clsx from 'clsx';
import styles from '@styles/06-components/inputs/_c.secondaryInput.module.scss';
import PrimaryContactInputProps from './SecondaryInputProps';
// import Loading from 'src/components/Loading/Loading';

/**
 * * Has two size: 'lg' | 'sm'
 * * Pass register and errors from parent as props
 * * When type='password' on click children(icon) toggles show the password
 * * For register and errors we use 'react-hook-form' with 'zod'
 * Sample of error validation:
 * type ValidationSchema = z.infer<typeof emailValidationSchema>;

  const { register, handleSubmit, formState } = useForm<ValidationSchema>({
    resolver: zodResolver(emailValidationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data): void => {
    alert(data);
  };
  
 * This is a TypeScript React component for a secondary input field with optional password toggle and
 * error handling.
 
 * @param {PrimaryContactInputProps}  - - `type`: the type of input (e.g. text, password, email)
 * 
 * @returns The SecondaryInput component is being returned.
 */
function SecondaryInput({
  type,
  size = 'lg',
  id,
  placeholder,
  children,
  errors,
  registerFn,
  onClickInputButton,
}: PrimaryContactInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const hasError = errors && errors[id];

  const errorMsg = hasError && errors[id].message;

  /**
   * The function toggles the visibility of a password input field.
   */
  const togglePassword = (): void => {
    // When the handler is invoked
    // chnage inverse the boolean state showPassword
    setShowPassword(!showPassword);
  };

  /**
   * * If the type is password, toggle the password. If the type is not password and onClickInputButton is defined, call onClickInputButton
   */
  const onClickButton = (): void => {
    if (type === 'password') {
      togglePassword();
    }
    if (type !== 'password' && onClickInputButton) {
      onClickInputButton();
    }
  };

  const inputType = showPassword ? 'text' : 'password';

  return (
    <div className={styles['c-sec-input']}>
      <div
        className={clsx(styles['c-sec-input__wrapper'], {
          [styles['c-sec-input__wrapper--error']]: hasError,
          [styles[`c-sec-input__wrapper--${size}`]]: size,
        })}
      >
        <input
          type={type === 'password' ? inputType : type}
          placeholder={placeholder}
          id={`secondary-input-${id}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...registerFn}
        />

        {!hasError && children && (
          <button onClick={onClickButton} type="button" className={styles['c-sec-input__btn']}>
            {children}
          </button>
        )}
      </div>

      {hasError && <span className={styles['c-sec-input__error']}>{errorMsg}</span>}
    </div>
  );
}

export default SecondaryInput;
