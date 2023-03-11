import React, { useState } from 'react';
import FormInput from '../../reusableComponents/FormInput/FormInput';
import { ReactComponent as UserIcon } from '../../assets/images/formInputIcons/user.svg';
import { ReactComponent as MailIcon } from '../../assets/images/formInputIcons/mail.svg';
import { ReactComponent as LockIcon } from '../../assets/images/formInputIcons/lock.svg';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import AuthTitle from 'reusableComponents/authTitle/AuthTitle';
import AuthImg from 'reusableComponents/AuthImg/AuthImg';
import AuthLinkTo from 'reusableComponents/AuthLinkTo/AuthLinkTo';

// import { selectAuthLoading } from 'redux/auth/authSelectors';

// const loading = useSelector(selectAuthLoading);
// const dispatch = useDispatch();

const RegisterForm = () => {
  const switchImages = name => {
    switch (name) {
      case 'name':
        return <UserIcon />;

      case 'email':
        return <MailIcon />;

      case 'password':
        return <LockIcon />;

      default:
        return <UserIcon className={css.img} />;
    }
  };

  let registrationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Type your name please')
      .min(1, 'your name must be 1 character at least')
      .max(16, '16 characters max')
      .matches(/^[a-zа-яA-ZА-Яіє'ї ]+$/, 'Only letters allowed'),
    email: yup
      .string()
      .min(1, 'your email must be 1 character at least')
      .max(16, '16 characters max')
      .email('your email must be valid')
      .required('Type your email please'),
    password: yup
      .string()
      .min(6, 'its too short')
      .max(16, 'email must be 16 characters max')
      .trim()
      .required('Type your password please'),
  });
  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  yup.addMethod(yup.string, 'email', function validateEmail(message) {
    return this.matches(myEmailRegex, {
      message,
      name: 'email',
      excludeEmptyString: true,
    });
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema: registrationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // const { name, email, password } = values;
      // dispatch(register({ name, email, password }));
      console.log(formik.values);
      setSubmitting(false);
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
      <div className={css.authBackgroundImg}></div>

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
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    handleClearClick={handleClearClick}
                    isValid={isValid}
                    switchImages={switchImages}
                    placeholder={'name'}
                    id="standard-required-register-pass"
                    type={'name'}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <small>{formik.errors.name}</small>
                  )}
                </div>

                <div className={css.formIinputFormat}>
                  <FormInput
                    switchImages={switchImages}
                    placeholder={'email'}
                    id="standard-required-register-pass"
                    type={'email'}
                    name="email"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <small>{formik.errors.email}</small>
                  )}
                </div>

                <div className={css.formIinputFormat}>
                  <FormInput
                    switchImages={switchImages}
                    placeholder={'password'}
                    id="standard-required-register-pass"
                    type={'password'}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <small>{formik.errors.password}</small>
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
