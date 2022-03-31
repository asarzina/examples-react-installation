import React, { useContext } from "react";
import { ArticlesContext } from './ArticlesProvider';

function ArticlesNumber() {
  const [articles] = useContext(ArticlesContext);

  return <h1>Numero articoli: {articles.length}</h1>
}

export default ArticlesNumber;
