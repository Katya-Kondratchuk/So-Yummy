import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Icon } from 'assets/images/AddRecipe/input-img.svg';
import PropTypes from 'prop-types';
import css from './ImgWithPreview.module.css';

function previewFile(inputEl) {
  const preview = inputEl.current;
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  if (!file || (file && file.name.length === 0)) {
    preview.style.opacity = 0;
    preview.src = '';
    return;
  }

  if (
    !file ||
    (file && !['image/jpeg', 'image/png', 'image/gif'].includes(file.type))
  ) {
    preview.style.opacity = 0;
    preview.src = '';
    return;
  }

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    preview.style.opacity = 1;
    reader.readAsDataURL(file);
  } else {
    preview.style.opacity = 1;
    preview.src = '';
  }
}

const ImgWithPreview = ({ imgAdd, setImgAdd }) => {
  const [img, setImg] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    if (!imgAdd) {
      setImg('');
      inputEl.current.src = '';
      inputEl.current.style.opacity = 0;
    }
  }, [imgAdd]);

  return (
    <div className={css.wrapperImg}>
      <input
        type="file"
        onChange={e => {
          previewFile(inputEl);

          if (!e.target.files[0]) {
            setImgAdd(null);
            setImg('');

            return;
          }
          setImgAdd(e.target.files[0]);
          setImg(e.target.value);
        }}
        value={img}
        className={css.imgInput}
      />

      <Icon width="64" height="64" className={css.icon} />

      <img src="" alt="" className={`${css.showImg}`} ref={inputEl} />
    </div>
  );
};

ImgWithPreview.propTypes = {
  setImgAdd: PropTypes.func,
};

export default ImgWithPreview;
