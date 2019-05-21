import React from 'react';
import PropTypes from 'prop-types';

export default function ScoreCard(props) {
  const { title, value, dateFrom, dateTo } = props;
  return (
    <div className="scoreCard-container">
      <h5 className="scoreCard-title">{title}</h5>
      <h3 className="scoreCard-value">{value}</h3>
      <h5 className="scoreCard-date">
        {dateFrom} - {dateTo}
      </h5>
    </div>
  );
}

ScoreCard.propTypes = {
  /** title of the ScoreCard */
  title: PropTypes.string,
  /** number of tickets in set category */
  value: PropTypes.string,
  /** start date */
  dateFrom: PropTypes.string,
  /** end date */
  dateTo: PropTypes.string,
};
