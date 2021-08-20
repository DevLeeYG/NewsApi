import React from 'react';
import Categories from '../component/Categories';
import NewsList from '../component/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <div>
      <Categories />
      <NewsList category={category}></NewsList>
    </div>
  );
};

export default NewsPage;
