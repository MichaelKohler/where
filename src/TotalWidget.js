import React from 'react';
import './scss/widget.scss';

class TotalWidget extends React.Component {
  calculateTrips() {
    return 5;
  }

  calculateFlights() {
    return 3;
  }

  calculateCountries() {
    return 3;
  }

  render() {
    let sectionClasses = 'card vertical';
    if (this.props.color) {
      sectionClasses += ` ${this.props.color}`;
    }

    return (
      <section className={sectionClasses}>
        <div className="number">
          <h2>{this.calculateTrips()}</h2>
          <p>total trips</p>
        </div>
        <div className="number">
          <h2>{this.calculateFlights()}</h2>
          <p>total flights</p>
        </div>
        <div className="number">
          <h2>{this.calculateCountries()}</h2>
          <p>total countries</p>
        </div>
      </section>
    );
  }
}

export default TotalWidget;
