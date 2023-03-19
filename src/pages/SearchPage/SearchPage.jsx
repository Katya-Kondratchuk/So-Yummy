import Search from 'components/Search/Search';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const SearchPage = () => {
  return (
    <>
      <Search />
      <GoToTop />
    </>
  );
};

export default SearchPage;
