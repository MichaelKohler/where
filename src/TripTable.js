import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import TripTableEntry from './TripTableEntry';
import './scss/triptable.scss';

const TripTable = ({ trips }) => {
  return (
    <table className="trips">
      <thead>
        <tr>
          <th>From</th>
          <th>Until</th>
          <th>Destination</th>
          <th>Country</th>
          <th>Description</th>
          <th>Flights</th>
        </tr>
      </thead>
      <tbody>
        { trips.map((trip) => { return <TripTableEntry trip={trip} />; }) }
      </tbody>
    </table>
  );
};

TripTable.defaultProps = {
  trips: []
};

TripTable.propTypes = {
  trips: PropTypes.array,
};

export default TripTable;
