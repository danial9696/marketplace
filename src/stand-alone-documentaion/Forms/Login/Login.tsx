// import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
import { ActionButton } from '@components/Button';
import { PrimaryInput } from '@components/Inputs';
// import { ContactUsValidationSchema } from '../../../lib/validations/validation';
// import { ContactUsProps } from './LoginProps';

function ContactUs() {
  // type ValidationSchema = z.infer<typeof ContactUsValidationSchema>;

  // const { register, handleSubmit, formState } = useForm<ValidationSchema>({
  //   resolver: zodResolver(ContactUsValidationSchema),
  //   defaultValues: props.defaultvalues,
  // });

  // const onSubmit: SubmitHandler<ValidationSchema> = (data): void => {
  //   // alert(data);
  //   console.log('data', data);
  // };

  return (
    <form>
      <PrimaryInput required name="name" label="نام کاربری" id="name" type="text" />

      <PrimaryInput required={false} name="age" label="سن" id="age" type="text" class="mt-4" />

      <PrimaryInput
        required
        name="password"
        label="رمز عبور"
        id="password"
        type="password"
        class="mt-4"
      />

      <PrimaryInput
        required
        name="confirmPassword"
        label="تایید رمز عبور"
        id="confirmPassword"
        type="password"
        class="mt-4"
      />

      <ActionButton class="mt-6" secondary type="submit" label="ثبت نام" />
    </form>
  );
}

export default ContactUs;
