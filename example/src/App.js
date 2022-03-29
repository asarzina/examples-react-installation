import React from 'react';
import NewsPreview from './NewsPreview';
import CounterFunctional from './CounterFunctional';

const articles = [
  {
    id: 1,
    title: 'News 1',
    description: 'Lorem ipsum ...',
    image: 'https://picsum.photos/100/100',
  },
  {
    id: 2,
    title: 'News 2',
    description: 'Lorem ipsum ...',
    image: 'https://picsum.photos/101/100',
  },
  {
    id: 3,
    title: 'News 3',
    description: 'Lorem ipsum ...',
    image: 'https://picsum.photos/102/100',
  },
];

const App = () => {
  return (
    <>
      <main className="container">
        {
          articles.map((article) => {
            return <NewsPreview article={article} key={article.id} />;
          })
        }
      </main>

      <div className="container">
        <CounterFunctional initValue={100} />
      </div>
    </>
  )
};

export default App;
