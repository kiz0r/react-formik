import { Form, Formik } from 'formik';
import { LOGIN_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';
import FormInput from '../FormInput';
import styles from './LoginForm.module.sass';

const { submitBtn, loginForm, namesWrapper } = styles;

const classes = {
  label: styles.label,
  input: styles.input,
  error: styles.error,
  valid: styles.valid,
  invalid: styles.invalid,
};

const LoginForm = (props) => {
  const loginFormInitialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={loginFormInitialValues}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className={loginForm}>
        <div className={namesWrapper}>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name"
            classes={classes}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name"
            classes={classes}
          />
        </div>
        <FormInput
          label="Username"
          name="username"
          type="text"
          placeholder="Username"
          classes={classes}
        />
        <button type="submit" className={submitBtn}>
          Create my Account
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
