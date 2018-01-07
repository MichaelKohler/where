import React from 'react';
import PropTypes from 'prop-types';
import './scss/triptable.scss';

class TripTableEntry extends React.Component {
  render() {
    const { trip } = this.props;
    const classes = [];
    const today = new Date();
    trip.dateFrom = new Date(trip.dateFrom);
    trip.dateUntil = new Date(trip.dateUntil);

    if (trip.dateFrom > today) {
      classes.push('future');
    }

    return (
      <tr className={classes}>
        <td>{trip.dateFrom.toDateString()}</td>
        <td>{trip.dateUntil.toDateString()}</td>
        <td>{trip.destination}</td>
        <td>{trip.country}</td>
        <td>{trip.description}</td>
        <td>{trip.flights}</td>
      </tr>
    );
  }
}

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
