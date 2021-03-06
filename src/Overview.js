import React from 'react';
import TotalWidget from './TotalWidget';
import NextTripWidget from './NextTripWidget';
import TripTable from './TripTable';
import Map from './Map';

import './scss/overview.scss';

import trips from '../trips.json';

const Overview = () => {
  const pastTrips = trips.visited.filter((trip) => {
    const now = new Date();
    const tripStartDate = new Date(trip.dateFrom);
    return tripStartDate < now;
  });

  const countries = pastTrips.map((trip) => trip.country);
  const allCountries = countries.concat(trips.otherVisited);
  const uniqueCountries = Array.from(new Set(allCountries));
  const uniqueDestinations = pastTrips.reduce((acc, trip) => {
    const existingEntry = acc.find((existing) => existing.destination === trip.destination);

    if (!existingEntry) {
      acc.push(trip);
    }

    return acc;
  }, []);

  const totals = {
    trips: pastTrips.length + trips.otherVisited.length,
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
        trips={uniqueDestinations}
        selector="visitedMap"
      />
      <TripTable
        trips={trips.visited}
      />
    </div>
  );
};

export default Overview;
