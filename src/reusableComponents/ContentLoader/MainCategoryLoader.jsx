import ContentLoader from 'react-content-loader';
import Loader from './CategoriesLoader';
import css from './MainCategoryLoader.module.css';

export const TitleLoader = props => {
  return (
    <ContentLoader
      width={207}
      height={44}
      viewBox="0 0 207 44"
      backgroundColor="#f5f5f5"
      foregroundColor="#EBF3D4"
      {...props}
    >
      <rect x="0" y="0" rx="16" ry="16" width="207" height="44" />-
    </ContentLoader>
  );
};
export const ButtonLoader = props => {
  return (
    <ContentLoader
      width={94}
      height={36}
      viewBox="0 0 94 36"
      backgroundColor="#f5f5f5"
      foregroundColor="#EBF3D4"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="94" height="36" />-
    </ContentLoader>
  );
};

const Desktop = () => {
  return (
    <div className={css.mainLoaderWrapper}>
      <TitleLoader />
      <Loader.Desktop />
      <div className={css.mainButtonWrapper}>
        <ButtonLoader />
      </div>
    </div>
  );
};
const Tablet = () => {
  return (
    <div className={css.mainLoaderWrapper}>
      <TitleLoader />
      <Loader.Tablet />
      <div className={css.mainButtonWrapper}>
        <ButtonLoader />
      </div>
    </div>
  );
};
const Mobile = () => {
  return (
    <div className={css.mainLoaderWrapper}>
      <TitleLoader />
      <Loader.Mobile />
      <div className={css.mainButtonWrapper}>
        <ButtonLoader />
      </div>
    </div>
  );
};

export const MainLoader = {
  Desktop,
  Tablet,
  Mobile,
};

export default MainLoader;
