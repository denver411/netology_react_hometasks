class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=50')
      .then(response => response.json())
      .then(logs => this.setState({ logs }));
  }

  render() {
    const { logs } = this.state;
    return <Logs logs={logs} />;
  }
}
