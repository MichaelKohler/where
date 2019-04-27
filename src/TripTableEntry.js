import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import './scss/triptable.scss';

const TripTableEntry = ({ trip }) => {
  const classes = [];
  const today = new Date();
  const tripToShow = Object.assign({}, trip, {
    dateFrom: new Date(trip.dateFrom),
    dateUntil: new Date(trip.dateUntil),
  });

  if (tripToShow.dateFrom > today) {
    classes.push('future');
  }

  return (
    <tr className={classes}>
      <td>{tripToShow.dateFrom.toDateString()}</td>
      <td>{tripToShow.dateUntil.toDateString()}</td>
      <td>{tripToShow.destination}</td>
      <td>{tripToShow.country}</td>
      <td>{tripToShow.description}</td>
      <td>{tripToShow.flights}</td>
    </tr>
  );
};

TripTableEntry.defaultProps = {
  trip: {}
};

TripTableEntry.propTypes = {
  trip: PropTypes.shape({
    destination: PropTypes.string,
    country: PropTypes.string,
    dateFrom: PropTypes.string,
    dateUntil: PropTypes.string,
    description: PropTypes.string,
    flights: PropTypes.number
  }),
};

export default TripTableEntry;
