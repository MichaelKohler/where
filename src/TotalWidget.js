import React from 'react';
import './scss/widget.scss';

class TotalWidget extends React.Component {
  render() {
    let sectionClasses = 'card vertical';
    if (this.props.color) {
      sectionClasses += ` ${this.props.color}`;
    }

    return (
      <section className={sectionClasses}>
        <div className="number">
          <h2>{this.props.totals.trips}</h2>
          <p>total trips</p>
        </div>
        <div className="number">
          <h2>{this.props.totals.flights}</h2>
          <p>total flights</p>
        </div>
        <div className="number">
          <h2>{this.props.totals.countries}</h2>
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
  totals: React.PropTypes.shape({
    trips: React.PropTypes.number,
    flights: React.PropTypes.number,
    countries: React.PropTypes.number,
  }),
  color: React.PropTypes.string,
};

export default TotalWidget;
