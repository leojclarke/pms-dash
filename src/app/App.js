import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../misc/GlobalStyles';
import ScoreCardTemplate from './components/ScoreCard';

const ScoreCardContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

function App() {
  return (
    <ScoreCardContainer>
      <GlobalStyles />
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
    </ScoreCardContainer>
  );
}

export default App;
