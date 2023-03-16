import React, { useState } from 'react';
import css from './UserMenuModalForm.module.css';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import * as yup from 'yup';
import HelperText from 'reusableComponents/FormInput/HelperText';
import { useFormik } from 'formik';
import FormInput from 'reusableComponents/FormInput/FormInput';
import switchImages from 'services/switchImages';
import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';

const UserMenuModalForm = ({ onClose }) => {
  let userNameSchema = yup.object().shape({
    userName: yup
      .string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ1-9]+$/, {
        message: 'Special simbols are not allowed',
        excludeEmptyString: true,
      })
      .min(1, 'Your name must be 1 character at least')
      .max(16, '16 characters max')
      .required('Type your name please'),
  });
  const formik = useFormik({
    initialValues: {
      userName: '',
    },
    validationSchema: userNameSchema,

    onSubmit: values => {
      //   const { name, email, password } = values;
      //   dispatch(register({ name, email, password }));
      //   setSubmitting(false);
    },
  });

  const isValid = userNameSchema.isValidSync(formik.values);

  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleImageChange = event => {
    const selectedFile = event.target.files[0];

    if (selectedFile.size > 2000000) {
      setErrorMessage('An image has to be less then 2mb ');
      setImage(null);
    } else {
      setImage(selectedFile);
      setErrorMessage(null);
    }
  };

  return (
    <div className={css.userModal}>
      <div className={css.cont}>
        <UserDataForm
          initialValues={formik.initialValues}
          schema={userNameSchema}
          buttonLabel={'Save changes'}
          formik={formik}
          isValid={isValid}
          divButtonClass={css.divButtonClass}
        >
          <div className={css.avatarChanger}>
            <div className={css.avatarPrevew}>
              <input type="file" onChange={handleImageChange} />
              {errorMessage && <div>{errorMessage}</div>}
              {image && (
                <div>
                  <img src={URL.createObjectURL(image)} alt="selected" />
                </div>
              )}
            </div>
          </div>
          <div className={css.formFromat}>
            <div className={css.formIinputFormat}>
              <FormInput
                autocomplete="off"
                formInputArea={css.formInputArea}
                // handleClearClick={handleClearClick}
                switchImages={switchImages}
                placeholder={'Olga'}
                id="standard-required-register-username"
                type="text"
                name="edit"
                formik={formik}
                erorr={formik.errors.userName}
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                formInputUserMenu={css.formInputUserMenu}
              />
              {formik.touched.userName && formik.errors.userName && (
                <HelperText
                  value={formik.values.userName}
                  errorText={formik.errors.userName}
                />
              )}
            </div>
          </div>
        </UserDataForm>
      </div>
      <MobMenuCloseBtn onClick={onClose} />
    </div>
  );
};

export default UserMenuModalForm;
