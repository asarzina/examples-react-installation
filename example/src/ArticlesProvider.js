import React, { createContext } from 'React';
import useArticles from './useArticles';

const ArticlesContext = createContext([{}, () => { }]);

const ArticlesProvider = ({ children, initialId, options }) => {
  const [articles, isLoading, id, onChange] = useArticles(initialId, options);

  return (
    <ArticlesContext.Provider value={[articles, isLoading, id, onChange]}>
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesProvider, ArticlesContext };
