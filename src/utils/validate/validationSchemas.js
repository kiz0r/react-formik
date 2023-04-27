import * as yup from 'yup';

const PASSWORD_VALIDATION_SCHEMA = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(16, 'Password must be at most 16 characters')
  .matches(/.*[a-z].*/, 'Password must include at least one lowercase letter')
  .matches(/.*[A-Z].*/, 'Password must include at least one uppercase letter')
  .matches(/.*\d.*/, 'Password must include at least one number')
  .matches(
    /.*[!@#$%^&*()_+=[\]{}\\|;:'",.<>/?-].*/,
    'Password must include at least one special character'
  )
  .required('Please enter your password');

const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .email()
  .required('Please enter your email');

export const SIGNUP_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(32, 'First name must be at most 32 characters')
    .matches(/^[A-Z].*/, 'First name should start with a capital letter')
    .matches(
      /[a-z]+$/,
      'The remainder of the name must be with a non-primary letter'
    )
    .required('Please enter your first name'),
  lastName: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(32, 'Last name must be at most 32 characters')
    .matches(/^[A-Z].*/, 'Last name should start with a capital letter')
    .matches(
      /[a-z]+$/,
      'The remainder of the name must be with a non-primary letter'
    )
    .required('Please enter your last name'),
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(16, 'Username must be at most 16 characters')
    .lowercase('Username should contain only latin letters')
    .required('Please enter your username'),
  email: EMAIL_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const SIGNIN_VALIDATION_SCHEMA = yup.object({
  email: EMAIL_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
});
