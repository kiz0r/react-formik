import { useState } from 'react';
import classNames from 'classnames';
import { Field } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './PasswordInput.module.sass';

const { shownBtn, passwordInputWrapper } = styles;

const PasswordInput = ({
  name,
  label,
  classes,
  isShown: [isShown, setIsShown],
  ...restProps
}) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassName = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        const [fieldType, setFieldType] = useState('password');

        const handleToggle = () =>
          fieldType === 'password'
            ? setFieldType('text')
            : setFieldType('password');

        return (
          <label className={classes.label}>
            <span>{label}</span>
            <div className={passwordInputWrapper}>
              <input
                className={inputClassName}
                {...restProps}
                {...field}
                type={fieldType}
              />
              <button
                className={shownBtn}
                type="button"
                onClick={() => {
                  setIsShown(!isShown);
                  handleToggle();
                }}
              >
                {isShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {meta.error && meta.touched && (
              <div className={classes.error}>{meta.error}</div>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default PasswordInput;
