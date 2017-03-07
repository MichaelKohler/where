/* global fetch */

import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import TripTable from './TripTable';
import VisitedMap from './VisitedMap';
import WishlistMap from './WishlistMap';
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
          <VisitedMap
            countries={this.state.trips.allCountries}
            selector="visitedMap"
          />
          <TripTable
            trips={this.state.trips.visited}
          />
          <h1>Wishlist</h1>
          <WishlistMap
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
