import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState([]);

  useEffect(() => {
    sortByUpvoted();
    // eslint-disable-next-line
  }, []);

  const sortByUpvoted = () => {
    const newArticles = [...articles];
    newArticles.sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(newArticles);
  };

  const sortByMostRecent = () => {
    const newArticles = [...articles];
    newArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedArticles(newArticles);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={sortByUpvoted}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={sortByMostRecent}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;
