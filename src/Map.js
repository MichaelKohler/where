/* global google document */
import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import './scss/map.scss';

class Map extends React.Component {
  componentDidMount() {
    this.createMap();
  }

  createMap() {
    const { selector, countries } = this.props;
    this.map = new google.maps.Map(document.getElementById(selector), {
      center: { lat: 33.626829, lng: 18.379068 },
      zoom: 2,
      disableDefaultUI: true
    });

    const whereQuery = `ISO_2DIGIT IN ('${countries.join('\', \'')}')`;
    const layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
        where: whereQuery
      },
      map: this.map,
      suppressInfoWindows: true
    });

    const styles = [{
      polygonOptions: {
        fillColor: '#4e79bc',
        fillOpacity: 0.7
      }
    }];

    layer.set('styles', styles);
  }

  render() {
    const { selector } = this.props;

    return (
      <section id={selector} />
    );
  }
}

Map.defaultProps = {
  countries: [],
  selector: ''
};

Map.propTypes = {
  countries: PropTypes.array,
  selector: PropTypes.string
};

export default Map;
