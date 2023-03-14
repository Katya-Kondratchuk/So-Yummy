import React, { useState } from 'react';
import FormInput from '../../reusableComponents/FormInput/FormInput';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import AuthTitle from 'reusableComponents/authTitle/AuthTitle';
import AuthImg from 'reusableComponents/AuthImg/AuthImg';
import AuthLinkTo from 'reusableComponents/AuthLinkTo/AuthLinkTo';
import switchImages from '../../services/switchImages';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { registerUser } from 'redux/auth/authOperation';
import AuthBackround from 'reusableComponents/AuthImg/AuthBackground';

// import { selectAuthLoading } from 'redux/auth/authSelectors';

// const loading = useSelector(selectAuthLoading);

const RegisterForm = () => {
  const [notify, setNotify] = useState(false);
  const dispatch = useDispatch();
  const myEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let registrationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(/^[\d\wаА-Яа-яа-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/, {
        message: 'Special simbols are not allowed',
        excludeEmptyString: true,
      })
      .min(1, 'Your name must be 1 character at least')
      .max(16, '16 characters max')
      .required('Type your name please'),
    email: yup
      .string()
      .lowercase()
      .matches(myEmailRegex, {
        message: 'Your email is not valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your password its too short')
      .required('Type your email please'),
    password: yup
      .string()
      .trim()
      .matches(/^[a-zа-яа-яа-щ1-9]/, 'Symbols are not allowed')
      .matches(
        /[A-Z-А-Я-ЩЬЮЯЇІЄҐ0-9]/,
        'Your password is little secure. Add a number or a capital letter.',
      )
      .min(6, 'Your password its too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Type your password please'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registrationSchema,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { name, email, password } = values;
      dispatch(registerUser({ name, email, password }));
      setSubmitting(false);
      setNotify(true);
    },
  });
  const isValid = registrationSchema.isValidSync(formik.values);
  const [inputValue, setInputValue] = useState('');

  // const handleInputChange = event => {
  //   setInputValue(event.target.value);
  // };
  const handleClearClick = () => {
    setInputValue(inputValue);
  };
  return (
    <div className={css.registrComponent}>
      <AuthBackround />
      <div className="container">
        <div className={css.registrFormatting}>
          <AuthImg />
          <div className={css.registrForm}>
            <div className={css.registrationTitleFormat}>
              <AuthTitle titleText={'Registration'} />
            </div>
            <UserDataForm
              initialValues={formik.initialValues}
              schema={registrationSchema}
              buttonLabel={'Sign Up'}
              formik={formik}
              isValid={isValid}
              notify={notify}
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    autocomplete="off"
                    formInputArea={css.formInputArea}
                    handleClearClick={handleClearClick}
                    switchImages={switchImages}
                    placeholder={'name'}
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
                    <HelperText
                      value={formik.values.name}
                      errorText={formik.errors.name}
                    />
                  )}
                </div>

                <div className={css.formIinputFormat}>
                  <FormInput
                    autocomplete="off"
                    formInputArea={css.formInputArea}
                    switchImages={switchImages}
                    placeholder={'email'}
                    id="standard-required-register-email"
                    type="email"
                    name="email"
                    erorr={formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <HelperText
                      value={formik.values.email}
                      errorText={formik.errors.email}
                    />
                  )}
                </div>

                <div className={css.formIinputFormat}>
                  <FormInput
                    autocomplete="off"
                    formInputArea={css.formInputArea}
                    switchImages={switchImages}
                    placeholder={'password'}
                    id="standard-required-register-pass"
                    type="password"
                    name="password"
                    erorr={formik.errors.password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password ===
                  'Your password is little secure. Add a number or a capital letter.' ? (
                    <small className={css.smallWarning}>
                      {formik.errors.password}
                    </small>
                  ) : (
                    <HelperText
                      value={formik.values.password}
                      errorText={formik.errors.password}
                      textSucsess="Password is secure"
                    />
                  )}
                </div>
              </div>
            </UserDataForm>
            <AuthLinkTo route="/signin" routeText="sign in" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
