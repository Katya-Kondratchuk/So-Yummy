import React from 'react';
import css from './UserMenuModalForm.module.css';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import * as yup from 'yup';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { useFormik } from 'formik';
import FormInput from 'reusableComponents/FormInput/FormInput';
import switchImages from 'services/switchImages';

const UserMenuModalForm = () => {
  let registrationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message: 'Only letters allowed',
        excludeEmptyString: true,
      })
      .min(1, 'your name must be 1 character at least')
      .max(16, '16 characters max')
      .required('Type your name please'),
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
  // const isValid = registrationSchema.isValidSync(formik.values);
  return (
    <div className={css.userModal}>
      <UserDataForm
        initialValues={formik.initialValues}
        schema={registrationSchema}
        buttonLabel={'Sign Up'}
        formik={formik}
      >
        <div className={css.formFromat}>
          <div className={css.formIinputFormat}>
            <FormInput
              autocomplete="off"
              formInputArea={css.formInputArea}
              // handleClearClick={handleClearClick}
              userName
              switchImages={switchImages}
              placeholder={'Olga'}
              id="standard-required-register-name"
              type="text"
              name="name"
              formik={formik}
              erorr={formik.errors.name}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <HelperText erorr={formik.errors.name} />
            )}
          </div>
        </div>
      </UserDataForm>
    </div>
  );
};

export default UserMenuModalForm;
