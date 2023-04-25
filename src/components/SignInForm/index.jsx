import { Form, Formik } from 'formik';
import { SIGNIN_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';
import FormInput from '../FormInput';
import styles from '../../common/styles/FormStyles.module.sass';
import { FormContext } from '../../contexts';
import { useContext } from 'react';

const { submitBtn, form, formTitle, formWrapper } = styles;

const classes = {
  label: styles.label,
  input: styles.input,
  error: styles.error,
  valid: styles.valid,
  invalid: styles.invalid,
};

const SignInForm = ({ title, description }) => {
  const signInFormInitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  const { signInTitle, signInDesc } = useContext(FormContext);

  return (
    <div className={formWrapper}>
      <div className={formTitle}>
        <h1>{signInTitle}</h1>
        <p>{signInDesc}</p>
      </div>
      <Formik
        initialValues={signInFormInitialValues}
        validationSchema={SIGNIN_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Form className={form}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            classes={classes}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            classes={classes}
          />
          <button type="submit" className={submitBtn}>
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
