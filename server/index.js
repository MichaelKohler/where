const _ = require('lodash');
const express = require('express');
const trips = require('./trips.json');

const app = express();

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(allowCrossDomain);

app.get('/trips', (req, res) => {
  trips.next = trips.next || getNextTrip();
  trips.total = trips.total || {
    trips: calculateTotalTrips(),
    flights: calculateTotalFlights(),
    countries: calculateTotalCountries()
  };

  res.send(trips);
});

app.listen(4444, () => {
  console.log('listening on port 4444!')
});

const getNextTrip = () => {
  let nextTrip = {};
  const allTrips = [];

  _.each(trips.trips, (year) => {
    _.each(year, (trip) => {
      allTrips.push(trip);
    });
  });

  const sortedTrips = _.sortBy(allTrips, ['dateFrom']).reverse();
  const today = new Date();

  _.each(sortedTrips, (trip) => {
    const startDate = new Date(trip.dateFrom);

    if (startDate > today) {
      nextTrip = trip;
    }
  });

  return nextTrip;
};

const calculateTotalTrips = () => {
  let totalTrips = 0;

  _.each(trips.trips, (year) => {
    _.each(year, () => {
      totalTrips = totalTrips + 1;
    });
  });

  return totalTrips;
};

const calculateTotalFlights = () => {
  let totalFlights = 0;

  _.each(trips.trips, (year) => {
    _.each(year, (trip) => {
      totalFlights += trip.flights;
    });
  });

  return totalFlights;
};

const calculateTotalCountries = () => {
  const allCountries = [];

  _.each(trips.trips, (year) => {
    _.each(year, (trip) => {
      allCountries.push(trip.country);
    });
  });

  const uniqueCountries = _.uniq(allCountries).length;
  return uniqueCountries;
};
