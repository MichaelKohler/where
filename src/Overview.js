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
    let url = `${document.location.protocol}//${document.location.hostname}/trips`;
    if (document.location.hostname === 'localhost') {
      url = 'http://localhost:4444/trips';
    }

    fetch(url)
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
              color="brand"
              nextTrip={this.state.trips.next}
            />
            <TotalWidget
              color="brand"
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
