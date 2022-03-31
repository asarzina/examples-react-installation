import React from 'react';
import NewsPreview from './NewsPreview';

const NewsListPresentational = ({ id, articles, isLoading, onChangeId }) => {
  return (
    <main className="container">
      {
        isLoading
          ?
          (<p>Sto caricando gli articoli...</p>)
          :
          (
            <>
              <label htmlFor="article-id">ID articolo</label>
              <input
                id="article-id"
                type="text"
                value={id}
                onChange={onChangeId}
              />

              {
                articles.map((article) => {
                  return <NewsPreview article={article} key={article.id} />;
                })
              }
            </>
          )
      }
    </main>
  )
};

export default NewsListPresentational;
