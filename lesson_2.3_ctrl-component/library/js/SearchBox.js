class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchForm = event => {
    event.preventDefault;
    this.props.filterBooks(event.currentTarget.value);
  };

  render() {
    return (
      <input
        onChange={this.handleSearchForm}
        value={this.props.value}
        type="text"
        placeholder="Поиск по названию или автору"
      />
    );
  }
}
