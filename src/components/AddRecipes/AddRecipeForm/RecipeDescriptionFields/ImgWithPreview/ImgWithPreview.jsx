import { useRef } from 'react';
import { ReactComponent as Icon } from 'assets/images/AddRecipe/input-img.svg';
import PropTypes from 'prop-types';
import css from './ImgWithPreview.module.css';

function previewFile(inputEl) {
  const preview = inputEl.current;
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

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
  const inputEl = useRef(null);
  return (
    <div className={css.wrapperImg}>
      <input
        type="file"
        onChange={e => {
          setImgAdd(e.target.value);
          previewFile(inputEl);
        }}
        className={css.imgInput}
        value={imgAdd}
      />

      <Icon width="64" height="64" className={css.icon} />

      <img
        src=""
        alt="prew show img for add recipe"
        className={`${css.showImg}`}
        ref={inputEl}
      />
    </div>
  );
};

ImgWithPreview.propTypes = {
  imgAdd: PropTypes.string,
  setImgAdd: PropTypes.func,
};

export default ImgWithPreview;
