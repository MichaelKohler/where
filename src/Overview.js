import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import './scss/overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TotalWidget color="medium" />
          <NextTripWidget color="light" />
        </div>

        <h1>Visited</h1>
        <p>Placeholder.. to be its own component</p>

        <h1>Wishlist</h1>
        <p>Placeholder.. to be its own component</p>
      </div>
    );
  }
}

export default Overview;
