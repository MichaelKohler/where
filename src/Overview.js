/* global fetch */

import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import TripTable from './TripTable';
import './scss/overview.scss';

class Overview extends React.Component {
  constructor() {
    super();

    this.loading = true;
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://localhost:4444/trips')
      .then((response) => {
        return response.json();
      })
      .then((trips) => {
        this.loading = false;
        this.setState({ trips });
      });
  }

  render() {
    return (
      <div className="container">
        { this.loading ? <span>Loading..</span> :
        <section>
          <div className="row">
            <TotalWidget
              color="medium"
              totals={this.state.trips.total}
            />
            <NextTripWidget
              color="light"
              nextTrip={this.state.trips.next}
            />
          </div>
          <TripTable
            trips={this.state.trips.visited}
          />
        </section>
        }
      </div>
    );
  }
}

export default Overview;
