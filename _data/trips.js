require('dotenv').config()
const trips = require('./raw.json');

const formattedTrips = trips.map((item) => {
  return {
    ...item,
    dateFrom: new Date(item.from).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }),
    dateTo: new Date(item.to).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }),
  };
});

const sortedTrips = trips.sort((a, b) => {
  const aDate = new Date(a.from);
  const bDate = new Date(b.from);

  if (aDate < bDate) {
    return -1;
  }

  if (aDate > bDate) {
    return 1;
  }

  return 0;
});

const firstTripInFuture = sortedTrips.find((item) => {
  return new Date(item.from) > new Date();
});

const pastTrips = trips.filter((trip) => new Date(trip.from) < new Date());
const totalTrips = pastTrips.length;
const destinations = [...new Set(pastTrips.map((trip) => trip.destination))]
  .length;
const countries = [...new Set(pastTrips.map((trip) => trip.country))].length;

module.exports = {
  formattedTrips,
  nextTrip: firstTripInFuture,
  totals: {
    trips: totalTrips,
    destinations,
    countries,
  },
  mapboxToken: process.env.MAPBOX_TOKEN,
  geoJSON: {
    type: 'FeatureCollection',
    features: trips.map((trip) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [trip.long, trip.lat],
        },
      };
    }),
  },
};