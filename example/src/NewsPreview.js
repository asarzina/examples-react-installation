import React from 'react';

const imgStyle = { width: '100px' };

function NewsPreview({ article = {} }) {
  const {
    titolo = '',
    sommario = '',
    square_image = '',
  } = article;

  return (
    <article>
      <h2 dangerouslySetInnerHTML={{ __html: titolo }} />
      <p dangerouslySetInnerHTML={{ __html: sommario }} />
      <img src={square_image} alt={titolo} title={titolo} style={imgStyle} />
    </article>
  );
};

export default NewsPreview;
