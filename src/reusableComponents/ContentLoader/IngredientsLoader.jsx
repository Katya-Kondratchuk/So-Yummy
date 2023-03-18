import ContentLoader from 'react-content-loader';
import css from './IngredientsLoader.module.css';

const IngredientLoader = props => {
  return (
    <ContentLoader
      width={1240}
      height={182}
      viewBox="0 0 1240 182"
      backgroundColor="#f5f5f5"
      foregroundColor="#EBF3D4"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="5" height="182" />-
      <rect x="0" y="0" rx="3" ry="3" width="1240" height="5" />-
      <rect x="1235" y="0" rx="3" ry="3" width="5" height="182" />-
      <rect x="40" y="20" rx="16" ry="16" width="180" height="140" />-
      <rect x="265" y="30" rx="5" ry="5" width="250" height="33" />-
      <rect x="265" y="80" rx="3" ry="3" width="520" height="7" />-
      <rect x="277" y="100" rx="3" ry="3" width="540" height="7" />-
      <rect x="265" y="120" rx="3" ry="3" width="300" height="7" />-
      <rect x="0" y="177" rx="3" ry="3" width="1240" height="5" />-
      <rect x="900" y="65" rx="10" ry="10" width="150" height="45" />-
      <rect x="1150" y="65" rx="7" ry="7" width="45" height="10" />-
      <rect x="1150" y="65" rx="7" ry="7" width="10" height="45" />
      <rect x="1150" y="100" rx="7" ry="7" width="45" height="10" />
      <rect x="1185" y="65" rx="7" ry="7" width="10" height="45" />
    </ContentLoader>
  );
};

export const IngredientsLoader = () => {
  return (
    <div className={css.IngredientLoader}>
      <IngredientLoader className={css.cardIngLoader} />
      <IngredientLoader className={css.cardIngLoader} />
      <IngredientLoader className={css.cardIngLoader} />
      <IngredientLoader className={css.cardIngLoader} />
    </div>
  );
};
