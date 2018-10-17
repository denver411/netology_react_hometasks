class Site extends React.Component {
  constructor(props) {
    super(props);
    this.alertify = window.alertify;
    this.state = {
      ids: []
    };

    this.generate = this.generate.bind(this);
  }

  componentDidMount() {
    this.generate();
  }

  componentDidUpdate() {
    const newId = this.state.ids[this.state.ids.length - 1];
    const lengthId = newId.length;
    this.alertify.log(`Новый ID ${lengthId} символ${this.getAlertEnding(lengthId)}`, null, 10000);
  }

  getAlertEnding = lengthId => {
    let lastDigit = [].slice.call(new String(lengthId), -1)[0];
    const ending = {
      0: 'ов',
      1: '',
      2: 'а',
      3: 'а',
      4: 'а',
      5: 'ов',
      6: 'ов',
      7: 'ов',
      8: 'ов',
      9: 'ов'
    };

    if (lengthId >10 && lengthId < 15) {
      lastDigit = 0;
    }

    return ending[lastDigit];
  };

  render() {
    return (
      <div className="row">
        <header className="info col-sm-12">
          <h1>Генератор случайных идентификаторов</h1>
        </header>
        <aside className="menu col-sm-12 col-md-4">
          <button className="button" onClick={this.generate}>
            Получить новый идентификатор
          </button>
        </aside>
        <main className="ids col-sm-12 col-md-8">
          <ul>
            {this.state.ids.map(id => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }

  generate() {
    const newId = makeid(random(5, 43, false));

    this.setState(prevState => ({
      ids: [...prevState.ids, newId]
    }));
  }
}

const makeid = (length = 12) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const random = (lower = 0, upper = 1, floating = true) =>
  floating
    ? Math.min(lower + Math.random() * (upper - lower), upper)
    : lower + Math.floor(Math.random() * (upper - lower + 1));
