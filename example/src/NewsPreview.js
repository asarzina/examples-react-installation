import React from 'react';

const imgStyle = { width: '100px' };

function NewsPreview({ article = {} }) {
  const {
    title = '',
    description = '',
    image = '',
  } = article;

  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} title={title} style={imgStyle} />
    </article>
  );
};

export default NewsPreview;
