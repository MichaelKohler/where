/* global mapboxgl */
import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import './scss/map.scss';

class Map extends React.Component {
  componentDidMount() {
    this.createMap();
  }

  createMap() {
    const { selector, trips } = this.props;

    mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbGtvaGxlcjE5OTEiLCJhIjoiY2pldmRiYWttMGZtazMzbDdueng4czNiayJ9.SjcGAbnqYRx9I5oq4VAljg';
    const map = new mapboxgl.Map({
      container: selector,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [8, 30],
      zoom: 1.6,
    });

    map.dragPan.disable();

    trips.forEach((destination) => {
      const marker = document.createElement('div');
      marker.className = 'marker';

      new mapboxgl.Marker(marker)
        .setLngLat([destination.lng, destination.lat])
        .addTo(map);
    });
  }

  render() {
    const { selector } = this.props;

    return (
      <section id={selector} />
    );
  }
}

Map.defaultProps = {
  trips: [],
  selector: ''
};

Map.propTypes = {
  trips: PropTypes.array,
  selector: PropTypes.string
};

export default Map;
