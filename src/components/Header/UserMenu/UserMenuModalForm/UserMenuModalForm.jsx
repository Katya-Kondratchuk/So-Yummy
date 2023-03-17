import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import css from './UserMenuModalForm.module.css';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import HelperText from 'reusableComponents/FormInput/HelperText';
import FormInput from 'reusableComponents/FormInput/FormInput';
import switchImages from 'services/switchImages';
import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';
import { ReactComponent as PlusIcon } from '../../../../assets/images/UserMenu/plus.svg';
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
      newAvatartURL: '',
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
    // const imageURL = window.URL.createObjectURL(selectedFile);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      // const base64String = reader.result.split(',')[1];
      // console.log(base64String);
      // console.log(JSON.stringify({ data: base64String }));
    };

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
            <label htmlFor="myFileInput">
              <div className={css.avatarPrevew}>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className={css.inputTypeFile}
                  id="myFileInput"
                  accept="image/*"
                />

                <PlusIcon className={css.plusIcon} />
                {errorMessage && (
                  <div className={css.fileWarning}>{errorMessage}</div>
                )}
                {image && (
                  <div className={css.userAvatar}>
                    <img src={URL.createObjectURL(image)} alt="selected" />
                  </div>
                )}
              </div>
            </label>
          </div>
          <div className={css.formFromat}>
            <div className={css.formIinputFormat}>
              <FormInput
                formInputArea={css.formInputArea}
                // handleClearClick={handleClearClick}
                switchImages={switchImages}
                autoComplete="username"
                placeholder={'Olga'}
                id="standard-required-register-username"
                type="text"
                name="edit"
                edit
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
