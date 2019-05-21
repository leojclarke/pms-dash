import React from 'react';
import './App.css';
import ScoreCard from './ScoreCard';

function App() {
  return (
    <ScoreCard
      title="new tickets"
      value="20"
      type="new"
      dateFrom="01.01.2019"
      dateTo="01.05.2019"
    />
  );
}

export default App;
