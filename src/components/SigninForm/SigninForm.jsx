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

const SigninForm = () => {
  const dispatch = useDispatch();
  const myEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let signinSchema = yup.object().shape({
    email: yup
      .string()
      .lowercase()
      .min(5, 'Your password its too short')
      .email('Your email must be valid')
      .matches(myEmailRegex, {
        message: 'Your email is not valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .required('Type your email please'),
    password: yup
      .string()
      .trim()
      .min(6, 'Your password its too short')
      .max(16, 'Your password must be 16 characters max')
      .matches(/^[a-zа-я1-9]/, 'Symbols are not allowed')
      .matches(
        /[A-Z-А-Я-ЩЬЮЯЇІЄҐ0-9]/,
        'Your password is little secure. Add a number or a capital letter.',
      )
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
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { email, password } = values;
      dispatch(loginUser({ email, password }));
      setSubmitting(false);
    },
  });
  const isValid = signinSchema.isValidSync(formik.values);
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
              initialValues={formik.initialValues}
              schema={signinSchema}
              buttonLabel={'Sign in'}
              formik={formik}
              isValid={isValid}
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    switchImages={switchImages}
                    erorr={formik.errors.email}
                    placeholder={'email'}
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
                    erorr={formik.errors.password}
                    switchImages={switchImages}
                    formInputArea={css.formInputArea}
                    placeholder={'password'}
                    id="standard-required-register-pass"
                    type="password"
                    name="password"
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
                      textSucsess={'Password is secure'}
                    />
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
