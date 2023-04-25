import { Form, Formik } from 'formik';
import { SIGNUP_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';
import FormInput from '../FormInput';
import styles from '../../styles/FormStyles.module.sass';
const { submitBtn, form, formTitle } = styles;
const classes = {
  label: styles.label,
  input: styles.input,
  error: styles.error,
  valid: styles.valid,
  invalid: styles.invalid,
};

const SignUpForm = ({ title, description }) => {
  const signupFormInitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <div>
      <div className={formTitle}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Formik
        initialValues={signupFormInitialValues}
        validationSchema={SIGNUP_VALIDATION_SCHEMA}
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
            SignUp
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
