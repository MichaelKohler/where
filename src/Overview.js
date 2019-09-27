import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import TripTable from './TripTable';
import Map from './Map';

import './scss/overview.scss';

import trips from '../trips.json';

class Overview extends React.Component {
  render() {
    const destinations = trips.visited.map((trip) => trip.destination);
    const uniqueDestinations = Array.from(new Set(destinations));
    const countries = trips.visited.map((trip) => trip.country);
    const allCountries = countries.concat(trips.otherVisited);
    const uniqueCountries = Array.from(new Set(allCountries));

    const totals = {
      trips: trips.visited.length + trips.otherVisited.length,
      flights: trips.visited.reduce((flights, trip) => flights + trip.flights, 0),
      uniqueDestinations: uniqueDestinations.length,
      countries: uniqueCountries.length,
    };

    let nextTrip = {};
    const today = new Date();
    trips.visited
      .sort((a, b) => {
        return new Date(b.dateFrom) - new Date(a.dateFrom);
      })
      .forEach((trip) => {
        const startDate = new Date(trip.dateFrom);

        if (startDate > today) {
          nextTrip = trip;
        }
      });

    return (
      <div className="container">
        {
          this.loading ? <span>Loading..</span>
            : (
              <section>
                <div className="row widget-row">
                  <NextTripWidget
                    color="brand"
                    nextTrip={nextTrip}
                  />
                  <TotalWidget
                    color="brand"
                    totals={totals}
                  />
                </div>
                <Map
                  countries={uniqueCountries}
                  selector="visitedMap"
                />
                <TripTable
                  trips={trips.visited}
                />
              </section>
            )
      }
      </div>
    );
  }
}

export default Overview;
