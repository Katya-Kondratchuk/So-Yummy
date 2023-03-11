import React from 'react';
import css from './PreviewCategories.module.css';
import Button from 'reusableComponents/Button/Button';

const images = [
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/300x300',
];

const PreviewCategories = () => {
  const selectedImages = images.slice(0, 4);
  return (
    <div className="container">
      <div className={css.previewContainer}>
        <h2 className={css.title}>Breakfast</h2>
        <ul className={css.list}>
          {selectedImages.map((imageUrl, index) => (
            <li key={index} className={css.item}>
              <img src={imageUrl} alt={`${index + 1}`} className={css.image} />
            </li>
          ))}
        </ul>
      </div>
      <div className={css.buttonContainer}>
        <Button
          isLink
          href="/categories"
          divClassName={css.buttonClass}
          label={'See all'}
        />
      </div>
    </div>
  );
};

export default PreviewCategories;

//вызов:
//<PreviewCategories />
