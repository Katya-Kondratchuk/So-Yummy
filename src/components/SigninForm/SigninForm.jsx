// import React, { useState } from 'react';
import FormInput from '../../reusableComponents/FormInput/FormInput';
import { ReactComponent as UserIcon } from '../../assets/images/formInputIcons/user.svg';
import { ReactComponent as MailIcon } from '../../assets/images/formInputIcons/mail.svg';
import { ReactComponent as LockIcon } from '../../assets/images/formInputIcons/lock.svg';
import css from './SigninForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import AuthTitle from 'reusableComponents/authTitle/AuthTitle';
import AuthImg from 'reusableComponents/AuthImg/AuthImg';
import AuthLinkTo from 'reusableComponents/AuthLinkTo/AuthLinkTo';
const SigninForm = () => {
  const switchImages = name => {
    switch (name) {
      case 'text':
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
    name: yup
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
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema: registrationSchema,
    // onSubmit: (values, { setSubmitting, resetForm }) => {
    //   const { name, email, password } = values;
    //   dispatch(register({ name, email, password }));
    //   console.log(values);
    //   setSubmitting(false);
    // },
    onSubmit: values => {
      console.log(values);
    },
  });
  // const isValid = registrationSchema.isValidSync(formik.values);
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = event => {
  //   setInputValue(event.target.value);
  // };

  // const handleClearClick = () => {
  //   setInputValue(inputValue);
  // };
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
                    switchImages={switchImages}
                    placeholder={'email'}
                    id="standard-required-register-email"
                    type="email"
                    name="email"
                    value={formik.values.email}
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
                    type="password"
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
            <AuthLinkTo route={'/register'} routeText={'registration'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
