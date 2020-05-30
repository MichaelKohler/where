import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import './scss/widget.scss';

const TotalWidget = ({ color, totals }) => {
  let sectionClasses = 'card vertical';
  if (color) {
    sectionClasses += ` ${color}`;
  }

  return (
    <section className={sectionClasses}>
      <div className="number">
        <h2>{totals.trips}</h2>
        <p>total trips</p>
      </div>
      <div className="number">
        <h2>{totals.uniqueDestinations}</h2>
        <p>unique cities</p>
      </div>
      <div className="number">
        <h2>{totals.countries}</h2>
        <p>total countries</p>
      </div>
    </section>
  );
};

TotalWidget.defaultProps = {
  totals: {
    trips: 0,
    countries: 0,
    uniqueDestinations: 0,
  },
  color: ''
};

TotalWidget.propTypes = {
  totals: PropTypes.shape({
    trips: PropTypes.number,
    countries: PropTypes.number,
    uniqueDestinations: PropTypes.number,
  }),
  color: PropTypes.string,
};

export default TotalWidget;
