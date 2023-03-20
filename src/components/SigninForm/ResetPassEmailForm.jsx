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

const ResetPassEmailForm = () => {
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
  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { email } = values;
      dispatch(loginUser({ email }));
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
              <AuthTitle titleText="Confirm your email" />
            </div>
            <UserDataForm
              divButtonClass={css.divButtonClass}
              initialValues={formik.initialValues}
              schema={signinSchema}
              buttonLabel="Confirm "
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
              </div>
            </UserDataForm>
            <div className={css.linkBox}>
              <AuthLinkTo
                route={'/register'}
                routeText={'Registration'}
                yourClassName={css.signUpLinkReset}
              />
              <AuthLinkTo
                route="/signin"
                routeText="Sign in"
                yourClassName={css.signInLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassEmailForm;
