import React from 'react';
import './scss/widget.scss';

class NextTripWidget extends React.Component {
  constructor() {
    super();

    this.defaultProps = {
      nextTrip: {}
    };
  }

  render() {
    const nextTrip = this.props.nextTrip;
    let sectionClasses = 'card next';

    if (this.props.color) {
      sectionClasses += ` ${this.props.color}`;
    }

    return (
      <section className={sectionClasses}>
        <div className="destination">
          <h1>Next trip: {nextTrip.destination}</h1>
        </div>
        <div className="date">
          <p>{new Date(nextTrip.dateFrom).toDateString()}&nbsp;-&nbsp;
            {new Date(nextTrip.dateUntil).toDateString()}</p>
        </div>
        <div className="description">
          <p>{nextTrip.description}</p>
        </div>
      </section>
    );
  }
}

export default NextTripWidget;
