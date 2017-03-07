/* global google document */
import React from 'react';
import './scss/map.scss';

class GeneralMap extends React.Component {
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
    this.layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
        where: whereQuery
      },
      map: this.map,
      suppressInfoWindows: true
    });
  }

  render() {
    return (
      <section id="visitedMap" />
    );
  }
}

GeneralMap.defaultProps = {
  countries: [],
  selector: ''
};

GeneralMap.propTypes = {
  countries: React.PropTypes.array,
  selector: React.PropTypes.string
};

export default GeneralMap;
