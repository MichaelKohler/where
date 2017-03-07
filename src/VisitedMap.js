/* global google document */
import React from 'react';
import './scss/map.scss';

class VisitedMap extends React.Component {
  componentDidMount() {
    this.createMap();
  }

  createMap() {
    const map = new google.maps.Map(document.getElementById('visitedMap'), {
      center: { lat: 33.626829, lng: 18.379068 },
      zoom: 2,
      disableDefaultUI: true
    });

    const whereQuery = `ISO_2DIGIT IN ('${this.props.countries.join('\', \'')}')`;
    new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
        where: whereQuery
      },
      map,
      suppressInfoWindows: true
    });
  }

  render() {
    return (
      <section id="visitedMap" />
    );
  }
}

VisitedMap.defaultProps = {
  countries: []
};

VisitedMap.propTypes = {
  countries: React.PropTypes.array,
};

export default VisitedMap;
