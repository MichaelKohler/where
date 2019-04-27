import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import './scss/widget.scss';

const NextTripWidget = ({ nextTrip, color }) => {
  let sectionClasses = 'card next';

  if (color) {
    sectionClasses += ` ${color}`;
  }

  return (
    <section className={sectionClasses}>
      <h1>
        Next trip:
        &nbsp;
        {nextTrip.destination}
      </h1>
      <p>
        {new Date(nextTrip.dateFrom).toDateString()}
        &nbsp;-&nbsp;
        {new Date(nextTrip.dateUntil).toDateString()}
      </p>
      { nextTrip.description ? <p>{nextTrip.description}</p> : '' }
    </section>
  );
};

NextTripWidget.defaultProps = {
  nextTrip: {},
  color: ''
};

NextTripWidget.propTypes = {
  nextTrip: PropTypes.shape({
    destination: PropTypes.string,
    dateFrom: PropTypes.string,
    dateUntil: PropTypes.string,
    description: PropTypes.string
  }),
  color: PropTypes.string,
};

export default NextTripWidget;
