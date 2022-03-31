import React, { useContext } from 'react';
import NewsListPresentational from './NewsListPresentational';
import { ArticlesContext } from './ArticlesProvider';

const NewsList = ({ initialId = '' }) => {
  const [articles, isLoading, id, onChange] = useContext(ArticlesContext);

  return (
    <NewsListPresentational
      id={id}
      articles={articles}
      isLoading={isLoading}
      onChangeId={(e) => onChange(e.target.value)}
    />
  )
};

export default NewsList;
