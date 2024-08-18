require('dotenv').config()

module.exports = {
  eleventyComputed: {
    formattedTrips: (data) => {
      return data.trips.map((item) => {
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
    },
    nextTrip: (data) => {
      const sortedTrips = data.trips.sort((a, b) => {
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

      return firstTripInFuture;
    },
    totals: (data) => {
      const pastTrips = data.trips.filter((trip) => new Date(trip.from) < new Date());
      const totalTrips = pastTrips.length;
      const destinations = [...new Set(pastTrips.map((trip) => trip.destination))]
        .length;
      const countries = [...new Set(pastTrips.map((trip) => trip.country))].length;

      return {
        trips: totalTrips,
        destinations,
        countries,
      }
    },
    mapboxToken: () => {
      return process.env.MAPBOX_TOKEN;
    },
    geoJSON: (data) => {
      return {
        type: 'FeatureCollection',
        features: data.trips.map((trip) => {
          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [trip.long, trip.lat],
            },
          };
        }),
      };
    },
  },
};