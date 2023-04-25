import { Form, Formik } from 'formik';
import { SIGNUP_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';
import FormInput from '../FormInput';
import styles from '../../common/styles/FormStyles.module.sass';
import { FormContext } from '../../contexts';
import { useContext, useState } from 'react';
import PasswordInput from '../PasswordInput';

const { submitBtn, form, namesWrapper, formTitle, formWrapper } = styles;

const classes = {
  label: styles.label,
  input: styles.input,
  error: styles.error,
  valid: styles.valid,
  invalid: styles.invalid,
};

const SignUpForm = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const [isShownConfirmedPassword, setIsShownConfirmedPassword] =
    useState(false);

  const signUpFormInitialValues = {
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

  const { signUpTitle, signUpDesc } = useContext(FormContext);

  return (
    <div className={formWrapper}>
      <div className={formTitle}>
        <h1>{signUpTitle}</h1>
        <p>{signUpDesc}</p>
      </div>
      <Formik
        initialValues={signUpFormInitialValues}
        validationSchema={SIGNUP_VALIDATION_SCHEMA}
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

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Password"
            isShown={[isShownPassword, setIsShownPassword]}
            classes={classes}
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmedPassword"
            placeholder="Confirm Password"
            isShown={[isShownConfirmedPassword, setIsShownConfirmedPassword]}
            classes={classes}
          />

          <button type="submit" className={submitBtn}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
