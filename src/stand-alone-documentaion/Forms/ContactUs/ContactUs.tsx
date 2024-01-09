import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ContactInput from '@components/Inputs/ContactInput';
import { ActionButton } from '@components/Button';
import { ContactUsValidationSchema } from '../../../lib/validations/validation';
import { ContactUsProps } from './ContactUsProps';

function ContactUs(props: ContactUsProps): JSX.Element {
  type ValidationSchema = z.infer<typeof ContactUsValidationSchema>;

  /* This code is using the `useForm` hook from the `react-hook-form` library to create a form with
 validation. */
  const { register, handleSubmit, formState } = useForm<ValidationSchema>({
    resolver: zodResolver(ContactUsValidationSchema),
    defaultValues: props.defaultvalues,
  });

  /**
   * This is a TypeScript React function that logs submitted data when a form is submitted.
   * @param data - The data parameter is an object that contains the values of the form fields
   * submitted by the user. The values are validated against the specified validation schema before
   * being passed to the onSubmit function.
   */
  const onSubmit: SubmitHandler<ValidationSchema> = (data): void => {
    console.log('Submited Data:', data);
  };

  /* `const disableSubmutButton` is a boolean variable that is set to `true` if there are any errors in
the form, and `false` otherwise. It is determined by checking the length of the `errors` object in
the `formState` object returned by the `useForm` hook. If there are any errors, the submit button
will be disabled, preventing the user from submitting the form until all errors are fixed. */
  const disableSubmutButton = Object.keys(formState.errors).length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContactInput
        placeholder="نام"
        id="firstName"
        type="text"
        buttonType="button"
        iconAccessibilityLabel="firstName"
        errors={formState.errors}
        registerFn={register('firstName')}
        state={{
          mode: 'default',
          text: '',
        }}
      >
        <i className="ic-mail" />
      </ContactInput>

      <ContactInput
        placeholder="نام خانوادگی"
        class="mt-4"
        id="lastName"
        buttonType="button"
        type="text"
        iconAccessibilityLabel="lastName"
        errors={formState.errors}
        registerFn={register('lastName')}
        state={{
          mode: 'default',
          text: '',
        }}
      >
        <i className="ic-mail" />
      </ContactInput>

      <ContactInput
        placeholder="ایمیل"
        class="mt-4"
        id="email"
        buttonType="button"
        type="text"
        iconAccessibilityLabel="email"
        errors={formState.errors}
        registerFn={register('email')}
        state={{
          mode: 'default',
          text: '',
        }}
      >
        <i className="ic-mail" />
      </ContactInput>

      {/* TODO: Handle zod number problem */}
      <ContactInput
        class="mt-4"
        placeholder="شماره تماس"
        buttonType="button"
        id="number"
        type="number"
        iconAccessibilityLabel=""
        errors={formState.errors}
        registerFn={{ ...register('number', { valueAsNumber: true }) }}
        state={{
          mode: 'default',
          text: '',
        }}
      >
        <i className="ic-mail" />
      </ContactInput>

      <ActionButton
        disabled={disableSubmutButton}
        class="mt-5 w-100"
        type="submit"
        label="ثبت مشخصات"
      />
    </form>
  );
}

export default ContactUs;
