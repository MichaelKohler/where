import { filterTripsByParams, getTripData, getNextTrip } from '../src/trips';

const tripData = [{
  destination: 'Bar',
  dateFrom: '2020-01-01',
  dateUntil: '2020-01-02',
  country: 'DE',
}, {
  destination: 'Baz',
  dateFrom: '2019-10-01',
  dateUntil: '2019-10-02',
  country: 'CH',
}, {
  destination: 'Baz',
  dateFrom: '2020-10-03',
  dateUntil: '2020-10-04',
  country: 'CH',
}, {
  destination: 'Foo',
  dateFrom: '2999-01-01',
  dateUntil: '2999-01-02',
  country: 'DE',
}];

test('should correctly calculate totals', () => {
  const data = getTripData(tripData);
  expect(data[1].trips).toEqual(3);
  expect(data[1].uniqueDestinations).toEqual(2);
  expect(data[1].countries).toEqual(2);
});

test('should correctly calculate unique destinations', () => {
  const [uniqueDestinations] = getTripData(tripData);
  const uniqueDestinationNames = uniqueDestinations.map((destination) => destination.destination);
  expect(uniqueDestinationNames).toEqual(['Bar', 'Baz']);
});

test('should get next trip', () => {
  const data = getNextTrip(tripData);
  expect(data.dateFrom).toEqual('2999-01-01');
});

test('should filter trips by year', () => {
  const data = filterTripsByParams(tripData, {
    year: '2019',
  });
  expect(data.length).toEqual(1);
  expect(data[0].dateFrom).toEqual('2019-10-01');
});

test('should filter trips by country', () => {
  const data = filterTripsByParams(tripData, {
    country: 'DE',
  });
  expect(data.length).toEqual(2);
  expect(data[0].destination).toEqual('Bar');
  expect(data[1].destination).toEqual('Foo');
});

test('should filter trips by country and year', () => {
  const data = filterTripsByParams(tripData, {
    country: 'CH',
    year: '2020',
  });
  expect(data.length).toEqual(1);
  expect(data[0].destination).toEqual('Baz');
});
