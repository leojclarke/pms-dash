import React from 'react';
import './App.css';
import ScoreCardTemplate from './components/ScoreCard';

function App() {
  return (
    <section className="scorecards-container">
      <ScoreCardTemplate
        title="new tickets"
        value="20"
        type="newTickets"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />

      <ScoreCardTemplate
        title="tickets in progress"
        value="25"
        type="progressTickets"
        dateFrom="01.01.2019"
        dateTo="01.05.2019"
      />

      <ScoreCardTemplate
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
