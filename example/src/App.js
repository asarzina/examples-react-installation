import React from 'react';
import ArticlesNumber from './ArticlesNumber';
import { ArticlesProvider } from './ArticlesProvider';
import CounterFunctional from './CounterFunctional';
import NewsList from './NewsList';

const App = ({ initialId }) => {
  return (
    <ArticlesProvider initialId={initialId} options={{ cacheMinutes: 60 }}>
      <ArticlesNumber />
      <NewsList />

      <div className="container">
        <CounterFunctional initValue={100} />
      </div>
    </ArticlesProvider>
  )
};

export default App;
