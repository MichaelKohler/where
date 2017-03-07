import React from 'react';
import './scss/widget.scss';

class NextTripWidget extends React.Component {
  render() {
    const nextTrip = this.props.nextTrip;
    let sectionClasses = 'card next';

    if (this.props.color) {
      sectionClasses += ` ${this.props.color}`;
    }

    return (
      <section className={sectionClasses}>
        <h1>Next trip: {nextTrip.destination}</h1>
        <p>{new Date(nextTrip.dateFrom).toDateString()}&nbsp;-&nbsp;
          {new Date(nextTrip.dateUntil).toDateString()}</p>
        { nextTrip.description ? <p>{nextTrip.description}</p> : '' }
      </section>
    );
  }
}

NextTripWidget.defaultProps = {
  nextTrip: {},
  color: ''
};

NextTripWidget.propTypes = {
  nextTrip: React.PropTypes.shape({
    destination: React.PropTypes.string,
    dateFrom: React.PropTypes.string,
    dateUntil: React.PropTypes.string,
    description: React.PropTypes.string
  }),
  color: React.PropTypes.string,
};

export default NextTripWidget;