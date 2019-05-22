import React from 'react';
import PropTypes from 'prop-types';

export default function ScoreCard(props) {
  const { title, value, dateFrom, dateTo } = props;
  return (
    <div className="scorecard">
      <h1 className="scorecard-title">{title}</h1>
      <h2 className="scorecard-value">{value}</h2>
      <h3 className="scorecard-date">
        {dateFrom} - {dateTo}
      </h3>
    </div>
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
