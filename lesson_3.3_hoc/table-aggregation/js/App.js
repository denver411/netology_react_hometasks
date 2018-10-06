'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <SortedMonthTable list={this.state.list} />
        <SortedYearTable list={this.state.list} />
        <SortedDateTable list={this.state.list} />
      </div>
    );
  }
}

const preparedData = (Component, type) => {
  return class extends React.Component {
    render() {
      const data = changeData(this.props, type);
      return <Component list={data} />;
    }
  };
};

const SortedMonthTable = preparedData(MonthTable, 'month');
const SortedYearTable = preparedData(YearTable, 'year');
const SortedDateTable = preparedData(SortTable, 'date');

const changeData = (...arg) => {
  const [{ list }, type] = arg;
  list.sort((a, b) => new Date(a.date) - new Date(b.date));
  const listDateFormatted = list.map(item => {
    const date = new Date(Date.parse(item.date));
    return { date: date, amount: item.amount };
  });

  switch (type) {
    case 'month':
      const monthsNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ];
      const monthsResults = [];
      const thisYearData = listDateFormatted.filter(
        item => item.date.getFullYear() === new Date().getFullYear()
      );

      for (let month of monthsNames) {
        let amount = 0;
        thisYearData.forEach(item => {
          if (monthsNames[item.date.getMonth()] === month) {
            amount += item.amount;
          }
        });
        monthsResults.push({ month: month, amount: amount });
      }

      return monthsResults;

    case 'year':
      const yearsResults = [];
      listDateFormatted.forEach(item => {
        if (!yearsResults.some(i => i.year === item.date.getFullYear())) {
          yearsResults.push({ year: item.date.getFullYear(), amount: item.amount });
        } else {
          for (let year of yearsResults) {
            if (year.year === item.date.getFullYear()) {
              year.amount += item.amount;
            }
          }
        }
      });
      return yearsResults;

    case 'date':
      return list;
  }
};