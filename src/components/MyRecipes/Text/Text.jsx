import React, { useState, useEffect } from 'react';
import css from './Text.module.css';

const Textt = ({ description }) => {
  const [isShow, setIsShow] = useState(false);

  const mobile = useMedia('(max-width: 767px)');
  const tablet = useMedia('(max-width: 1439px)');
  const desctop = useMedia('(min-width: 1440px)');

  function useMedia(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => setMatches(media.matches);
      media.addListener(listener);

      return () => media.removeListener(listener);
    }, [query, matches]);

    return matches;
  }

  const toogle = () => {
    setIsShow(prevState => !prevState);
  };

  if (mobile && description.length > 150) {
    return (
      <p className={css.text}>
        {isShow ? description : description.substr(0, 150)}
        <button className={css.btn} onClick={toogle}>
          {isShow ? 'Less' : '...'}
        </button>
      </p>
    );
  }
  if (tablet && description.length > 300) {
    return (
      <p className={css.text}>
        {' '}
        {isShow ? description : description.substr(0, 300)}
        <button className={css.btn} onClick={toogle}>
          {isShow ? 'Less' : '...'}
        </button>
      </p>
    );
  }
  if (desctop) {
    return <p className={css.text}>{description}</p>;
  }

  if (description.length < 200) {
    return <p className={css.text}>{description}</p>;
  }
};
export default Textt;
