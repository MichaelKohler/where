import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import TripTable from './TripTable';
import Map from './Map';

import './scss/overview.scss';

import trips from '../trips.json';

class Overview extends React.Component {
  render() {
    const countries = trips.visited.map((trip) => trip.country);
    const allCountries = countries.concat(trips.otherVisited);
    const uniqueCountries = Array.from(new Set(allCountries));

    const uniqueDestinationsCoordinates = trips.visited.reduce((acc, trip) => {
      const existingEntry = acc.find((existing) => existing.destination === trip.destination);

      if (!existingEntry) {
        acc.push(trip);
      }

      return acc;
    }, []);

    const totals = {
      trips: trips.visited.length + trips.otherVisited.length,
      flights: trips.visited.reduce((flights, trip) => flights + trip.flights, 0),
      uniqueDestinations: uniqueDestinationsCoordinates.length,
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
                <div className="widget-row">
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
                  trips={uniqueDestinationsCoordinates}
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
