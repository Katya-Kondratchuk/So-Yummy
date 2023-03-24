import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  selectAuthUserAvatarURL,
  selectAuthUserName,
} from 'redux/auth/authSelectors';
import { updateUserAvatar, updateUserName } from 'redux/auth/authSlice';
import FormInput from 'reusableComponents/FormInput/FormInput';
import HelperText from 'reusableComponents/FormInput/HelperText';
import UserDataForm from 'reusableComponents/UserDataForm/UserDataForm';
import { postUserInfo } from 'services/api/recipesAPI';
import switchImages from 'services/switchImages';
import * as yup from 'yup';
import { ReactComponent as ErorrIcon } from '../../../../assets/images/formInputIcons/erorr.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/images/UserMenu/plus.svg';
import css from './UserMenuModalForm.module.css';

const UserMenuModalForm = ({ onClose }) => {
  const userMenuInput = useRef(null);
  const dispatch = useDispatch();
  const userInitName = useSelector(selectAuthUserName);
  const [image, setImage] = useState(null);
  const initialValues = {
    image: null,
    userName: userInitName || '',
  };

  let userNameSchema = yup.object().shape({
    image: yup
      .mixed()
      .nullable()
      .test('type', 'Only image files are allowed', value => {
        return (
          !value || (value && ['image/jpeg', 'image/png'].includes(value.type))
        );
      })
      .test('size', 'The image must be less than 2 MB', value => {
        return !value || (value && value.size <= 2000000);
      }),
    userName: yup
      .string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ1-9]+$/, {
        message: 'Special symbols are not allowed',
      })
      .min(1, 'Your name must be 1 character at least')
      .max(16, '16 characters max'),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: userNameSchema,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { userName, image } = values;
      setSubmitting(false);
      if (image || userName !== initialValues.userName) {
        postUserInfo({ name: userName, avatar: image })
          .then(res => {
            dispatch(updateUserName(res.name));
            dispatch(updateUserAvatar(res.avatarURL));

            toast.success('Your profile has been changed');
          })
          .catch(error => toast.error('An error occured, try again'))
          .finally(() => {
            onClose();
          });
      } else return toast.error('Change your data please');
    },
  });

  const isValid = userNameSchema.isValidSync(formik.values);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      formik.values.image = selectedFile;
      setImage(selectedFile);
    } else {
      setImage('');
    }
  };
  const onClearImgClick = () => {
    setImage('');
  };
  const userAvatarURL = useSelector(selectAuthUserAvatarURL);

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
            <label htmlFor="newAvatartURL" className={css.avatarChangerLebel}>
              <div
                style={{
                  backgroundImage: image ? 'none' : `url(${userAvatarURL})`,
                }}
                className={css.avatarPrevew}
              >
                <input
                  type="file"
                  name="newAvatartURL"
                  onChange={e => {
                    handleImageChange(e);
                    formik.handleChange(e);
                  }}
                  className={css.inputTypeFile}
                  id="newAvatartURL"
                  accept="image/*"
                />
                {!image && <PlusIcon className={css.plusIcon} />}
                {formik.errors.image ? (
                  <span className={css.fileWarning}>{formik.errors.image}</span>
                ) : (
                  <span className={css.fileWarning}> </span>
                )}
                {image && (
                  <div className={css.userAvatar}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="selected"
                      className={css.defaultImg}
                    />
                  </div>
                )}
              </div>
            </label>
            {image && (
              <button
                type="button"
                onClick={onClearImgClick}
                className={css.clearButton}
              >
                <ErorrIcon />
              </button>
            )}
          </div>
          <div className={css.formFromat}>
            <div className={css.formIinputFormat}>
              <FormInput
                formInputArea={css.formInputArea}
                switchImages={switchImages}
                autoComplete="off"
                placeholder={userInitName}
                id="standard-required-register-username"
                type="text"
                name="userName"
                edit
                ref={userMenuInput}
                userInitName={userInitName}
                formik={formik}
                erorr={formik.errors.userName}
                value={formik.values.userName}
                onChange={formik.handleChange}
                formInputUserMenu={css.formInputUserMenu}
              />
              {formik.errors.userName && (
                <HelperText
                  value={formik.values.userName}
                  errorText={formik.errors.userName}
                />
              )}
            </div>
          </div>
        </UserDataForm>
      </div>

      <MobMenuCloseBtn closeMenu={onClose} />
    </div>
  );
};

export default UserMenuModalForm;
