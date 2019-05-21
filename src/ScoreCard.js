import React from 'react';

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
