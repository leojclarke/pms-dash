import React from 'react';
import './App.css';
import ScoreCard from './ScoreCard';

function App() {
  return (
    <section className="ScoreCards-Container">
      <ScoreCard
        title="new tickets"
        value="20"
        type="new"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />

      <ScoreCard
        title="tickets in progress"
        value="25"
        type="wip"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />
    </section>
  );
}

export default App;
