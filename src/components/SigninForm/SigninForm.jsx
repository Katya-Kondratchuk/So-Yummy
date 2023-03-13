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

const SigninForm = () => {
  const dispatch = useDispatch();
  let signinSchema = yup.object().shape({
    email: yup
      .string()
      .min(1, 'your email must be 1 character at least')
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
    validationSchema: signinSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { email, password } = values;
      dispatch(loginUser({ email, password }));
      setSubmitting(false);
    },
  });
  // const isValid = signinSchema.isValidSync(formik.values);
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
              schema={signinSchema}
              buttonLabel={'Sign Up'}
              formik={formik}
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
                    <small>{formik.errors.email}</small>
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
