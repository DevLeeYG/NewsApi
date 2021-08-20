import React from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromis';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width:768) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      ` https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4a458cc55f384f26a831d33ddcbd318b`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} /> //아티클에는 뉴스의 정보들이 담겨있다
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
