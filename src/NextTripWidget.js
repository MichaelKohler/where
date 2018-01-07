import React from 'react';
import PropTypes from 'prop-types';
import './scss/widget.scss';

class NextTripWidget extends React.Component {
  render() {
    const { nextTrip } = this.props;
    let sectionClasses = 'card next';

    if (this.props.color) {
      sectionClasses += ` ${this.props.color}`;
    }

    return (
      <section className={sectionClasses}>
        <h1>Next trip: {nextTrip.destination}</h1>
        <p>
          {new Date(nextTrip.dateFrom).toDateString()}&nbsp;-&nbsp;
          {new Date(nextTrip.dateUntil).toDateString()}
        </p>
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
  nextTrip: PropTypes.shape({
    destination: PropTypes.string,
    dateFrom: PropTypes.string,
    dateUntil: PropTypes.string,
    description: PropTypes.string
  }),
  color: PropTypes.string,
};

export default NextTripWidget;
