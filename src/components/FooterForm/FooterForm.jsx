import React from 'react';
import css from './FooterForm.module.css';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import * as yup from 'yup';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { useFormik } from 'formik';
import FormInput from 'reusableComponents/FormInput/FormInput';
import switchImages from 'services/switchImages';

const FooterForm = () => {
  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  let registrationSchema = yup.object().shape({
    email: yup
      .string()
      .min(5, 'Your password its too short')
      // .email('your email must be valid')
      .matches(myEmailRegex, {
        message: 'Your email is not valid',
        name: 'email',
        excludeEmptyString: true,
      }),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: registrationSchema,

    onSubmit: values => {
      console.log(values);
      //   const { name, email, password } = values;
      //   dispatch(register({ name, email, password }));
      //   setSubmitting(false);
    },
  });
  const isValid = registrationSchema.isValidSync(formik.values);
  return (
    <div className={css.footerForm}>
      <UserDataForm
        initialValues={formik.initialValues}
        schema={registrationSchema}
        buttonLabel="Subscribe"
        formik={formik}
      >
        <div className={css.formFromat}>
          <div className={css.formIinputFormat}>
            <FormInput
              autocomplete="off"
              formInputArea={css.formInputArea}
              // handleClearClick={handleClearClick}
              switchImages={switchImages}
              placeholder={'Enter your email address'}
              id="standard-required-register-email"
              type="email"
              name="email"
              formik={formik}
              erorr={formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <HelperText erorr={formik.errors.email} />
            )}
          </div>
        </div>
      </UserDataForm>
    </div>
  );
};

export default FooterForm;
