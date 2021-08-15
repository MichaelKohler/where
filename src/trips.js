export function getTripData(trips) {
  const pastTrips = trips.filter((trip) => {
    const now = new Date();
    const tripStartDate = new Date(trip.dateFrom);
    return tripStartDate < now;
  });

  const countries = pastTrips.map((trip) => trip.country);
  const uniqueCountries = Array.from(new Set(countries));
  const uniqueDestinations = pastTrips.reduce((acc, trip) => {
    const existingEntry = acc.find((existing) => existing.destination === trip.destination);

    if (!existingEntry) {
      acc.push(trip);
    }

    return acc;
  }, []);

  const totals = {
    trips: pastTrips.length,
    uniqueDestinations: uniqueDestinations.length,
    countries: uniqueCountries.length,
  };

  return [uniqueDestinations, totals];
}

export function getNextTrip(trips) {
  let nextTrip = {};
  const today = new Date();

  trips.forEach((trip) => {
    const startDate = new Date(trip.dateFrom);

    if (startDate > today) {
      nextTrip = trip;
    }
  });

  return nextTrip;
}

export function filterTripsByParams(trips, filters) {
  const filtered = trips.filter((trip) => {
    const tripFromYear = new Date(trip.dateFrom).getFullYear();
    const tripUntilYear = new Date(trip.dateUntil).getFullYear();
    const isMatchingYear = filters.year
      ? tripFromYear === parseInt(filters.year, 10) || tripUntilYear === parseInt(filters.year, 10)
      : true;
    const isMatchingCountry = filters.country
      ? trip.country === filters.country
      : true;

    return isMatchingYear && isMatchingCountry;
  });

  return filtered;
}
