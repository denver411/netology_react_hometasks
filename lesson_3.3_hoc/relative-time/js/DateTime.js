'use strict';

const DateTime = props => {
  return <p className="date">{props.date}</p>;
};

const TimePrettier = Component => {
  return class extends React.Component {
    render() {
      this.props.date = toPrettyDate(this.props.date);
      return <Component {...this.props} />;
    }
  };
};

const DateTimePretty = TimePrettier(DateTime);

const toPrettyDate = date => {
  let delay = Date.now() - Date.parse(date);

  if (delay > 24 * 60 * 60 * 1000) {
    return (delay / (24 * 60 * 60 * 1000)).toFixed(0) + ' дней назад';
  } else if (delay > 5 * 60 * 60 * 1000) {
    return (delay / (60 * 60 * 1000)).toFixed(0) + ' часов назад';
  }

  return (delay / (60 * 1000)).toFixed(0) + ' минут назад';
};
