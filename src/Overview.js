/* global fetch document */

import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import TripTable from './TripTable';
import Map from './Map';
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
    fetch(`${document.location.protocol}//${document.location.hostname}:4444/trips`)
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
            <NextTripWidget
              color="light"
              nextTrip={this.state.trips.next}
            />
            <TotalWidget
              color="medium"
              totals={this.state.trips.total}
            />
          </div>
          <Map
            countries={this.state.trips.allCountries}
            selector="visitedMap"
          />
          <TripTable
            trips={this.state.trips.visited}
          />
          <h1>Wishlist</h1>
          <Map
            countries={this.state.trips.wishlist}
            selector="wishlistMap"
          />
        </section>
        }
      </div>
    );
  }
}

export default Overview;
