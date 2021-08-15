/* eslint-disable react/style-prop-object */

import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import ReactMapboxGl, { Feature, Layer } from 'react-mapbox-gl';

import './scss/map.scss';

const Map = ({ trips }) => {
  const MapBox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWljaGFlbGtvaGxlcjE5OTEiLCJhIjoiY2pldmRiYWttMGZtazMzbDdueng4czNiayJ9.SjcGAbnqYRx9I5oq4VAljg'
  });

  return (
    <section id="visitedMap">
      <MapBox
        style="mapbox://styles/mapbox/light-v10"
        zoom={[2]}
        center={[8, 30]}
        containerStyle={{
          height: '90vh',
          width: '100%'
        }}
        dragPan={false}
        dragRotate={false}
        touchZoomRotate={false}
      >
        <Layer
          type="circle"
          id="marker"
          paint={{ 'circle-radius': 4, 'circle-color': '#1f3352' }}
        >
          { trips.map((trip) => (
            <Feature
              key={`${trip.destination}-${trip.dateFrom}`}
              coordinates={[trip.lng, trip.lat]}
            />
          ))}
        </Layer>
      </MapBox>
    </section>
  );
};

Map.defaultProps = {
  trips: [],
};

Map.propTypes = {
  trips: PropTypes.array,
};

export default Map;
