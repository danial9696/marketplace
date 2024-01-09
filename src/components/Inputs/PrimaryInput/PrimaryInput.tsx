import { Label } from '@radix-ui/react-label';
import { z } from 'zod';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styles from '@styles/06-components/text-inputs/_c.input.module.scss';
import PrimaryInputProps from './PrimaryInputProps';
import validationSchema from './validation';

/**
 * This is a TypeScript React component for a primary input field with validation using Zod.
 * @param {PrimaryInputProps} props - The `PrimaryInput` function takes in a single parameter
 * `props` which is of type `PrimaryInputProps`. This parameter is an object that contains various
 * properties such as `id`, `label`, `type`, `placeholder`, `width`, and `children`. These properties
 * are used to render a
 * @returns A React component that renders a primary text input field with a label, placeholder, and
 * validation error message. The component uses the `useForm` hook from the `react-hook-form` library
 * to handle form submission and validation, and the `zodResolver` function from the
 * `@hookform/resolvers` library to validate the input data against a `zod` schema. The component also
 * accepts
 */
function PrimaryInput(props: PrimaryInputProps): JSX.Element {
  const { class: customClass = '' } = props;

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <div className={`${styles['c-input']} ${customClass}`}>
      <Label
        className={clsx(styles['c-input__label'], {
          [styles['c-input__label--req']]: props.required,
        })}
        htmlFor={props.id}
      >
        {props.label}
      </Label>

      <input
        className={`${styles['c-input__field']} ${
          errors.firstName && styles['c-input__field--err']
        }`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('firstName')}
      />
      {errors.firstName && <p> {errors.firstName?.message}</p>}
      {props.children}
    </div>
  );
}

export default PrimaryInput;
