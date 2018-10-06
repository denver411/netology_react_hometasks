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
  // console.log(list, type);
  switch (type) {
    case 'month':
      const monthName = [
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
      const thisYearData = list.filter(
        item =>
          new Date(Date.parse(item.date)).getFullYear() ===
          new Date().getFullYear()
      );
      for (let month of monthName) {
        let amount = 0;
        thisYearData.map(item => {
          if (monthName[new Date(Date.parse(item.date)).getMonth()] === month) {
            amount += item.amount;
          }
        });
        monthsResults.push({ month: month, amount: amount });
      }

      return monthsResults;

    case 'year':
      const years = [];
      list.forEach(item => {
        const date = new Date(Date.parse(item.date));
        if (!years.some(i => i.year == date.getFullYear())) {
          years.push({ year: date.getFullYear(), amount: item.amount });
        } else {
          for (let year of years) {
            if (year.year == date.getFullYear()) {
              year.amount += item.amount;
            }
          }
        }
      });
      return years.sort((a, b) => a.year - b.year);

    case 'date':
      return list
        .map(item => {
          const date = new Date(Date.parse(item.date));
          return { date: date, amount: item.amount };
        })
        .sort((a, b) => a.date - b.date)
        .map(item => {
          const date = formatDate(item.date);
          return { date: date, amount: item.amount };
        });
  }
};

const formatDate = date => {
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  return date.getFullYear() + '-' + month + '-' + day;
};
