import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(32)
    .matches(/^[A-Z].*/, 'Name should start with a capital letter')
    .matches(
      /[a-z]+$/,
      'The remainder of the name must be with a non-primary letter'
    )
    .required('Please enter your first name'),
  lastName: yup
    .string()
    .min(2)
    .max(32)
    .matches(/^[A-Z].*/, 'Last name should start with a capital letter')
    .matches(
      /[a-z]+$/,
      'The remainder of the name must be with a non-primary letter'
    )
    .required('Please enter your last name'),
  username: yup
    .string()
    .min(5)
    .max(16)
    .lowercase('Username should contain only latin letters')
    .required('Please enter your username'),
  email: yup.string().email().required('Please enter your email'),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(/.*[a-z].*/, 'Password must include at least one lowercase letter')
    .matches(/.*[A-Z].*/, 'Password must include at least one uppercase letter')
    .matches(/.*\d.*/, 'Password must include at least one number')
    .matches(
      /.*[!@#$%^&*()_+=[\]{}\\|;:'",.<>/?-].*/,
      'Password must include at least one special character'
    )
    .required('Please enter a password'),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const SIGNUP_VALIDATION_SCHEMA = yup.object({
  email: yup.string().email().required('Please enter your email'),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(/.*[a-z].*/, 'Password must include at least one lowercase letter')
    .matches(/.*[A-Z].*/, 'Password must include at least one uppercase letter')
    .matches(/.*\d.*/, 'Password must include at least one number')
    .matches(
      /.*[!@#$%^&*()_+=[\]{}\\|;:'",.<>/?-].*/,
      'Password must include at least one special character'
    )
    .required('Please enter a password'),
});
