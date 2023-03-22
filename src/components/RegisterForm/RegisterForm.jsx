import React, { useRef, useState } from 'react';
import FormInput from '../../reusableComponents/FormInput/FormInput';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShowPassword } from '../../assets/images/formInputIcons/unlock.svg';
import * as yup from 'yup';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import AuthTitle from 'reusableComponents/authTitle/AuthTitle';
import AuthImg from 'reusableComponents/AuthImg/AuthImg';
import AuthLinkTo from 'reusableComponents/AuthLinkTo/AuthLinkTo';
import switchImages from '../../services/switchImages';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { registerUser } from 'redux/auth/authOperation';
import AuthBackround from 'reusableComponents/AuthImg/AuthBackground';
import warningValidation from 'services/warningValidation';
import switchColorUnlock from './unlockColorSwitcher';
let initialValues = {
  name: '',
  email: '',
  password: '',
};
const RegisterForm = () => {
  const [notify, setNotify] = useState(false);
  const passwordInput = useRef(null);
  const emailInput = useRef(null);
  const nameInput = useRef(null);
  const [visibility, setVisibility] = useState(true);

  const dispatch = useDispatch();
  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let registrationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+$/, {
        message: 'Special symbols are not allowed',
        excludeEmptyString: true,
      })
      .min(1, 'Your name must be 1 character at least')
      .max(16, '16 characters max')
      .required('Type your name please'),
    email: yup
      .string()
      .matches(myEmailRegex, {
        message: 'Your email must be valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your email is too short')
      .max(254, 'Your email is too long')
      .lowercase()
      .required('Type your email please'),
    password: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
        'Special symbols are not allowed',
      )
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Type your password please'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { name, email, password } = values;
      dispatch(registerUser({ name, email, password }));
      setSubmitting(false);
      setNotify(true);
    },
  });

  const isValid = registrationSchema.isValidSync(formik.values);
  const hendleButtonShown = () => {
    setVisibility(!visibility);
  };

  const togglePasswordVisibility = () => {
    if (passwordInput.current.type === 'password') {
      passwordInput.current.type = 'text';
    } else {
      passwordInput.current.type = 'password';
    }
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
              divButtonClass={css.divButtonClass}
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    autoComplete="name"
                    formInputArea={css.formInputArea}
                    switchImages={switchImages}
                    placeholder="Name"
                    id="standard-required-register-name"
                    type="text"
                    name="name"
                    formik={formik}
                    erorr={formik.errors.name}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ref={nameInput}
                  />
                  {formik.errors.name && (
                    <HelperText
                      value={formik.values.name}
                      errorText={formik.errors.name}
                    />
                  )}
                </div>

                <div className={css.formIinputFormat}>
                  <FormInput
                    autoComplete="email"
                    formInputArea={css.formInputArea}
                    switchImages={switchImages}
                    placeholder="Email"
                    formik={formik}
                    id="standard-required-register-email"
                    type="email"
                    name="email"
                    erorr={formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ref={emailInput}
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
                    autoComplete="current-password"
                    formInputArea={css.formInputArea}
                    switchImages={switchImages}
                    placeholder="Password"
                    id="standard-required-register-pass"
                    type="password"
                    name="password"
                    formik={formik}
                    ref={passwordInput}
                    erorr={formik.errors.password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    togglePasswordVisibility={togglePasswordVisibility}
                  />
                  <button
                    style={{ opacity: visibility ? '0' : '1' }}
                    type="button"
                    className={switchColorUnlock(
                      formik.errors.password,
                      formik.values.password,
                      '',
                    )}
                    onClick={e => {
                      togglePasswordVisibility();
                      hendleButtonShown();
                    }}
                  >
                    <ShowPassword />
                  </button>
                  {!formik.errors.password &&
                  formik.values.password &&
                  !warningValidation(formik.values.password) ? (
                    <small className={css.smallWarning}>
                      Your password is little secure. Add a capital letter.
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
            <AuthLinkTo
              yourClassName={css.signInLink}
              route="/signin"
              routeText="Sign in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
