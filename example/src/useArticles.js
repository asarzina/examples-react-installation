import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';

const API_URL = 'https://www.ecodibergamo.it/api/story_related/11';

const getArticlesFromLS = (id, cacheMinutes = 60) => {
  try {
    const cached = sessionStorage.getItem(`article_${id}`);
    const data = JSON.parse(cached);
    const updatedAt = (new Date(data.date));
    const expiredDate = updatedAt.setMinutes(updatedAt.getMinutes() + cacheMinutes);

    if (Date.now() > expiredDate) {
      return [];
    }

    if (Array.isArray(data.articles)) {
      return data.articles;
    } else {
      return [];
    }
  }
  catch (e) {
    return [];
  }
}

const useArticles = (initialId, { cacheMinutes = 60, dafaultDelay = 1000 } = {}) => {
  const [id, setId] = useState(initialId);
  const [articleId] = useDebounce(id, dafaultDelay);
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (articleId) {
      const articlesFromCache = getArticlesFromLS(articleId, cacheMinutes);

      if (articlesFromCache.length > 0) {
        return setArticles(articlesFromCache)
      }

      setLoading(true);

      axios
        .get(`${API_URL}/${articleId}/?max_result=3`)
        .then(response => {
          setArticles(response.data);

          sessionStorage.setItem(`article_${articleId}`, JSON.stringify({
            date: (new Date()).toISOString(),
            articles: response.data,
          }));
        })
        .finally(() => setLoading(false));
    }
  }, [articleId]);

  function onChange(value) {
    setId(value);
  }

  return [
    articles,
    isLoading,
    id,
    onChange,
  ]
}

export default useArticles;
