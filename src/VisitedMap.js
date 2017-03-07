/* global google document */
import React from 'react';
import GeneralMap from './GeneralMap';
import './scss/map.scss';

class VisitedMap extends GeneralMap {
  render() {
    return (
      <section id="visitedMap" />
    );
  }
}

export default VisitedMap;