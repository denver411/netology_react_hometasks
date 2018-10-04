class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />;
  }

  isFixed() {
    const headerBlock = document.querySelector('.header');
    return headerBlock.getBoundingClientRect().top <= -164 ? true : false;
  }

  setPosition = () => {
    this.setState({
      fixed: this.isFixed()
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }
}
