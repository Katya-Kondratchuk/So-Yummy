import FormInput from '../../reusableComponents/FormInput/FormInput';
import css from './SigninForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import switchImages from '../../services/switchImages';
import { useDispatch } from 'react-redux';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import AuthTitle from 'reusableComponents/authTitle/AuthTitle';
import AuthImg from 'reusableComponents/AuthImg/AuthImg';
import AuthLinkTo from 'reusableComponents/AuthLinkTo/AuthLinkTo';
import { loginUser } from 'redux/auth/authOperation';
import AuthBackround from 'reusableComponents/AuthImg/AuthBackground';
import HelperText from 'reusableComponents/FormInput/HelperText';
import warningValidation from 'services/warningValidation';
import switchColorUnlock from 'components/RegisterForm/unlockColorSwitcher';
import { useRef, useState } from 'react';
import { ReactComponent as ShowPassword } from '../../assets/images/formInputIcons/unlock.svg';

const SigninForm = () => {
  const signInPasswordInput = useRef(null);
  const [visibility, setVisibility] = useState(true);

  const dispatch = useDispatch();
  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  let signinSchema = yup.object().shape({
    email: yup
      .string()
      .lowercase()
      .matches(myEmailRegex, {
        message: 'Your email must be valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your email is too short')
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

  yup.addMethod(yup.string, 'email', function validateEmail(message) {
    return this.matches(myEmailRegex, {
      message,
      name: 'email',
      excludeEmptyString: true,
    });
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { email, password } = values;
      dispatch(loginUser({ email, password }));
      setSubmitting(false);
    },
  });
  const isValid = signinSchema.isValidSync(formik.values);
  const togglePasswordVisibility = () => {
    if (signInPasswordInput.current.type === 'password') {
      signInPasswordInput.current.type = 'text';
    } else {
      signInPasswordInput.current.type = 'password';
    }
  };
  const hendleButtonShown = () => {
    setVisibility(!visibility);
  };
  return (
    <div className={css.registrComponent}>
      <AuthBackround />
      <div className="container">
        <div className={css.registrFormatting}>
          <AuthImg />
          <div className={css.registrForm}>
            <div className={css.registrationTitleFormat}>
              <AuthTitle titleText="Sign in" />
            </div>
            <UserDataForm
              divButtonClass={css.divButtonClass}
              initialValues={formik.initialValues}
              schema={signinSchema}
              buttonLabel={'Sign in'}
              formik={formik}
              isValid={isValid}
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    autoComplete="email"
                    switchImages={switchImages}
                    erorr={formik.errors.email}
                    placeholder="Email"
                    id="standard-required-register-email"
                    type="email"
                    name="email"
                    formInputArea={css.formInputArea}
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
                    autoComplete="current-password"
                    erorr={formik.errors.password}
                    switchImages={switchImages}
                    formInputArea={css.formInputArea}
                    placeholder="Password"
                    id="standard-required-register-pass"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ref={signInPasswordInput}
                  />
                  <button
                    style={{ opacity: visibility ? '0' : '1' }}
                    type="button"
                    className={switchColorUnlock(
                      formik.errors.password,
                      formik.values.password,
                      css.unlockButtonSignIn,
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
                      textSucsess={'Password is secure'}
                    />
                  )}
                </div>
              </div>
            </UserDataForm>
            <div className={css.linkBox}>
              <AuthLinkTo
                yourClassName={css.signUpLink}
                route={'/register'}
                routeText={'Registration'}
              />
              <AuthLinkTo
                route={'/password-reset-token/'}
                routeText={'Forgot your password?'}
                yourClassName={css.forgotPassLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
