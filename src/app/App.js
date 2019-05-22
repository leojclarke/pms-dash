import React from 'react';
import './App.css';
import ScoreCard from './components/ScoreCard';
import styled-components from styled

function App() {
  return (
    <section className="scorecards-container">
      <ScoreCard
        title="new tickets"
        value="20"
        type="newTickets"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />

      <ScoreCard
        title="tickets in progress"
        value="25"
        type="progressTickets"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />

      <ScoreCard
        title="tickets closed"
        value="5"
        type="closedTickets"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />
    </section>
  );
}

export default App;
