class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
      done: false
    };

    this.send = this.send.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  send() {
    this.setState({ done: true });
    this.handleForm();
  }

  handleForm() {
    const { name, text } = this.state;
    console.log(name, text);
    setTimeout(() => {
      this.setState({
        name: '',
        text: '',
        done: false
      });
    }, 1000);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { done } = this.state;

    console.log(this.state);

    return (
      <main className="container">
        <div className="row">
          <section className="col-ls-6 offset-lg-3 col-sm-12">
            <div className="form">
              <h2>Обратная связь</h2>
              <p>Нам важно ваше мнение</p>

              <label>
                Имя
                <input className="input" value={this.state.name} onChange={this.handleNameChange} />
              </label>

              <label>
                Сообщение
                <textarea className="input" value={this.state.text} onChange={this.handleTextChange} />
              </label>

              <button
                className={`form__send ${done && 'form__send-disabled'}`}
                onClick={this.send}>
                Отправить
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}