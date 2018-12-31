import React from 'react';
import PropTypes from 'prop-types';
import './scss/widget.scss';

class TotalWidget extends React.Component {
  render() {
    let sectionClasses = 'card vertical';
    const { color, totals } = this.props;
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
          <h2>{totals.flights}</h2>
          <p>total flights</p>
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
  }
}

TotalWidget.defaultProps = {
  totals: {
    trips: 0,
    flights: 0,
    countries: 0
  },
  color: ''
};

TotalWidget.propTypes = {
  totals: PropTypes.shape({
    trips: PropTypes.number,
    flights: PropTypes.number,
    countries: PropTypes.number,
  }),
  color: PropTypes.string,
};

export default TotalWidget;
