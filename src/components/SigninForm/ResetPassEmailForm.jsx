import FormInput from '../../reusableComponents/FormInput/FormInput';
import css from './ResetPassEmailForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import switchImages from '../../services/switchImages';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import AuthTitle from 'reusableComponents/authTitle/AuthTitle';
import AuthImg from 'reusableComponents/AuthImg/AuthImg';
import AuthLinkTo from 'reusableComponents/AuthLinkTo/AuthLinkTo';
import AuthBackround from 'reusableComponents/AuthImg/AuthBackground';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { postResendLink } from 'services/api/recipesAPI.js';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ResetPassEmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      postResendLink({ email: email })
        .then(email => {
          toast.info(`Check ${email} for confirmation letter`);
          setIsLoading(false);
        })
        .catch(error =>
          toast.error('An error occured please check your email and try again'),
        );
      setIsLoading(false);
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
              isLoading={isLoading}
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    autoComplete="email"
                    switchImages={switchImages}
                    erorr={formik.errors.email}
                    placeholder="Email"
                    formik={formik}
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
                yourClassName={css.signInLinkReset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassEmailForm;
