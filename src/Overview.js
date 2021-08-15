import React, { useMemo } from 'react';
import Map from './Map';
import NextTripWidget from './NextTripWidget';
import { filterTripsByParams, getTripData, getNextTrip } from './trips';
import TotalWidget from './TotalWidget';
import TripTable from './TripTable';

import './scss/overview.scss';

import allTrips from '../trips.json';

const Overview = () => {
  allTrips.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom));

  const searchParams = new URLSearchParams(window.location.search);
  const filters = {
    country: searchParams.get('country'),
    year: searchParams.get('year'),
  };

  const nextTrip = useMemo(() => getNextTrip(allTrips), [allTrips]);
  const filteredTrips = useMemo(
    () => filterTripsByParams(allTrips, filters), [filters, allTrips]
  );
  const [uniqueDestinations, totals] = useMemo(() => getTripData(filteredTrips), [filteredTrips]);

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
      />
      <TripTable
        trips={filteredTrips}
      />
    </div>
  );
};

export default Overview;
