import React from 'react';
import './scss/widget.scss';

class TotalWidget extends React.Component {
  constructor() {
    super();

    this.defaultProps = {
      totals: {
        trips: 0,
        flights: 0,
        countries: 0
      }
    };
  }

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

export default TotalWidget;
