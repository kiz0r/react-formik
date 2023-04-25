import { Form, Formik } from 'formik';
import { LOGIN_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';
import FormInput from '../FormInput';
import styles from '../../styles/FormStyles.module.sass';

const { submitBtn, form, namesWrapper, formTitle } = styles;

const classes = {
  label: styles.label,
  input: styles.input,
  error: styles.error,
  valid: styles.valid,
  invalid: styles.invalid,
};

const LoginForm = ({ title, description }) => {
  const loginFormInitialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
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
        initialValues={loginFormInitialValues}
        validationSchema={LOGIN_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Form className={form}>
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
          <FormInput
            label="Confirm Password"
            name="confirmedPassword"
            type="password"
            placeholder="Confirm Password"
            classes={classes}
          />
          <button type="submit" className={submitBtn}>
            Create my Account
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
