import { createContext } from 'react';

const formFilling = {
  signUpTitle: 'Sign Up Form',
  signUpDesc: 'We always keep your data in secret',
  signInTitle: 'Sign In Form',
  signInDesc: 'We are glad to see you again!',
};

const FormContext = createContext(formFilling);

export { formFilling, FormContext };
