import { z } from 'zod';

/* This code exports a validation schema for email using the Zod library. The schema defines an object
with two properties: `firstName` and `email`. The `firstName` property is a string with a minimum
length of 1 character and a custom error message if the length is less than 3 characters. The
`email` property is also a string with a minimum length of 1 character and a custom error message if
it is not provided. Additionally, the `email` property is validated using the `.email()` method with
a custom error message if the email is not valid. */
export const ContactUsValidationSchema = z.object({
  firstName: z.string().trim().min(3, { message: 'نام حداقل باید 3 حرف باشد.' }),
  lastName: z.string().trim().min(3, { message: 'نام خانوادگی حداقل باید 3 حرف باشد.' }),
  email: z.string().trim().min(4, { message: 'لطفا ایمیل خود را وارد کنید.' }).email({
    message: 'ایمیل شما معتبر نمی‌باشد',
  }),
  number: z
    .number()
    .int()
    .nonnegative()
    .finite()
    .safe()
    .min(8, { message: 'شماره تماس باید حداقل 8 رقمی باشد.' }),
  // .max(12, { message: 'شماره تماس باید حداکثر 11 رقمی باشد.' }),
});

/* This code exports a validation schema for a number using the Zod library. The schema defines an
object with a single property `number`. The `number` property is validated using the `.number()`
method with a custom error message if the input is not a number. The `.positive()` method is used to
ensure that the number is positive, the `.finite()` method is used to ensure that the number is
finite, and the `.min()` method is used to ensure that the number is at least 1 and has a custom
error message if it is less than 4 digits long. */
export const numberValidationSchema = z.object({
  number: z
    .number({
      invalid_type_error: 'لطفا از اعداد استفاده کنید.',
    })
    .int()
    .positive()
    .finite()
    .min(1, { message: 'عدد م.رد نظر حداقل باید 4 رقمی باشد.' }),
});
