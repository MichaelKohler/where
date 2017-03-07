/* global google document */
import React from 'react';
import './scss/map.scss';

class Map extends React.Component {
  componentDidMount() {
    this.createMap();
  }

  createMap() {
    this.map = new google.maps.Map(document.getElementById(this.props.selector), {
      center: { lat: 33.626829, lng: 18.379068 },
      zoom: 2,
      disableDefaultUI: true
    });

    const whereQuery = `ISO_2DIGIT IN ('${this.props.countries.join('\', \'')}')`;
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
    return (
      <section id={this.props.selector} />
    );
  }
}

Map.defaultProps = {
  countries: [],
  selector: ''
};

Map.propTypes = {
  countries: React.PropTypes.array,
  selector: React.PropTypes.string
};

export default Map;
