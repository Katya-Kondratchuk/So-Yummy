import ContentLoader from 'react-content-loader';
import css from './CategoriesLoader.module.css';

const CardLoader = props => {
  return (
    <ContentLoader
      width={290}
      height={313}
      viewBox="0 0 300 323"
      backgroundColor="#f5f5f5"
      foregroundColor="#EBF3D4"
      {...props}
    >
      <rect x="0" y="0" rx="16" ry="16" width="290" height="220" />-
      <rect x="0" y="0" rx="16" ry="16" width="30" height="313" />-
      <rect x="260" y="0" rx="16" ry="16" width="30" height="313" />-
      <rect x="0" y="278" rx="16" ry="16" width="290" height="35" />-
    </ContentLoader>
  );
};

const Desktop = () => {
  return (
    <div className={css.loaderWrapper}>
      <CardLoader className={css.oneCardLoader} />
      <CardLoader className={css.oneCardLoader} />
      <CardLoader className={css.oneCardLoader} />
      <CardLoader className={css.oneCardLoader} />
    </div>
  );
};
const Tablet = () => {
  return (
    <div className={css.loaderWrapper}>
      <CardLoader className={css.oneCardLoader} />
      <CardLoader className={css.oneCardLoader} />
    </div>
  );
};
const Mobile = () => {
  return (
    <div className={css.loaderWrapper}>
      <CardLoader className={css.oneCardLoader} />
    </div>
  );
};

export const Loader = {
  Desktop,
  Tablet,
  Mobile,
};

export default Loader;
