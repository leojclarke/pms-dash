import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScoreCard = styled.div`
  width: 300px;
  height: 150px;
  margin-left: 20px;
  border: 2px solid #000;
  background: #eee;
`;

const ScoreCardTitle = styled.h1`
  background: skyblue;
  padding: 5px;
  margin: 0;
  font-size: 1em;
  text-align: left;
`;

const ScoreCardValue = styled.h2`
  background: rebeccapurple;
  margin: 0;
  align-items: center;
  text-align: center;
  font-size: 3em;
`;

const ScoreCardDate = styled.h3`
  margin: 0;
  background: orange;
  font-size: 0.8em;
  text-align: center;
`;

export default function ScoreCardTemplate(props) {
  const { title, value, dateFrom, dateTo } = props;

  return (
    <ScoreCard>
      <ScoreCardTitle>{title}</ScoreCardTitle>
      <ScoreCardValue>{value}</ScoreCardValue>
      <ScoreCardDate>
        {dateFrom} - {dateTo}
      </ScoreCardDate>
    </ScoreCard>
  );
}

ScoreCard.propTypes = {
  /** title of the ScoreCard */
  title: PropTypes.string.isRequired,
  /** number of tickets in set category */
  value: PropTypes.number.isRequired,
  /** start date */
  dateFrom: PropTypes.string.isRequired,
  /** end date */
  dateTo: PropTypes.string.isRequired,
};
