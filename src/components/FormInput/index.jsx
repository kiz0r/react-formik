import classNames from 'classnames';
import { Field } from 'formik';

const FormInput = ({ name, label, classes, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassName = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        return (
          <label className={classes.label}>
            <span>{label}</span>
            <input className={inputClassName} {...restProps} {...field} />
            {meta.error && meta.touched && (
              <div className={classes.error}>{meta.error}</div>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default FormInput;
