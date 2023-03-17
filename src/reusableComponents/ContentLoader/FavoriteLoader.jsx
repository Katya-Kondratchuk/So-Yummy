import ContentLoader from 'react-content-loader';
import css from './FavoriteLoader.module.css';

const CardLoader = props => {
  return (
    <ContentLoader
      width={1200}
      height={404}
      viewBox="0 0 1200 404"
      backgroundColor="#f5f5f5"
      foregroundColor="#EBF3D4"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="5" height="404" />-
      <rect x="0" y="0" rx="3" ry="3" width="1199" height="5" />-
      <rect x="1195" y="0" rx="3" ry="3" width="5" height="404" />-
      <rect x="40" y="40" rx="16" ry="16" width="315" height="323" />-
      <rect x="376" y="41" rx="5" ry="5" width="78" height="33" />-
      <rect x="475" y="41" rx="5" ry="5" width="250" height="33" />-
      <rect x="402" y="121" rx="3" ry="3" width="660" height="10" />-
      <rect x="412" y="148" rx="3" ry="3" width="560" height="10" />-
      <rect x="402" y="176" rx="3" ry="3" width="610" height="10" />-
      <rect x="402" y="250" rx="3" ry="3" width="485" height="10" />-
      <rect x="412" y="220" rx="3" ry="3" width="675" height="10" />-
      <rect x="0" y="399" rx="3" ry="3" width="1199" height="5" />-
      <rect x="390" y="336" rx="10" ry="10" width="72" height="25" />-
      <rect x="1000" y="320" rx="25" ry="25" width="150" height="50" />-
      <rect x="1090" y="31" rx="7" ry="7" width="60" height="60" />-
    </ContentLoader>
  );
};

export const FavoriteLoader = () => {
  return (
    <div className={css.favoriteLoader}>
      <CardLoader className={css.cardLoader} />
      <CardLoader className={css.cardLoader} />
      <CardLoader className={css.cardLoader} />
      <CardLoader className={css.cardLoader} />
    </div>
  );
};
