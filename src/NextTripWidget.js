import React from 'react';
import './scss/widget.scss';

class NextTripWidget extends React.Component {
  getNextTrip() {
    return {
      destination: 'Berlin',
      dateFrom: new Date('2017-03-10'),
      dateUntil: new Date('2017-03-13'),
      description: 'Testdescription'
    };
  }

  render() {
    const nextTrip = this.getNextTrip();
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
          <p>{nextTrip.dateFrom.toDateString()}&nbsp;-&nbsp;
            {nextTrip.dateUntil.toDateString()}</p>
        </div>
        <div className="description">
          <p>{nextTrip.description}</p>
        </div>
      </section>
    );
  }
}

export default NextTripWidget;
