import React from 'react';
import './scss/triptable.scss';

class TripTableEntry extends React.Component {
  render() {
    const trip = this.props.trip;

    return (
      <tr>
        <td>{new Date(trip.dateFrom).toDateString()}</td>
        <td>{new Date(trip.dateUntil).toDateString()}</td>
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
  trip: React.PropTypes.shape({
    destination: React.PropTypes.string,
    country: React.PropTypes.string,
    dateFrom: React.PropTypes.string,
    dateUntil: React.PropTypes.string,
    description: React.PropTypes.string,
    flights: React.PropTypes.number
  }),
};

export default TripTableEntry;
