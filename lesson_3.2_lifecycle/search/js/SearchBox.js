class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} getNode={this.getNode} />;
  }

  getNode = (nodeName, node) => {
    this[nodeName] = node;
  };

  isFixed = () => {
    const searchContainerPosition = this.searchContainer.getBoundingClientRect()
      .top;
    const searchBoxPosition = this.searchBox.getBoundingClientRect().top;

    return searchContainerPosition < 0 && searchBoxPosition <= 0;
  };

  setPosition = () => {
    this.setState({
      fixed: this.isFixed()
    });
  };

  shouldComponentUpdate(newProps, newState) {
    return this.state.fixed !== newState.fixed;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }
}
