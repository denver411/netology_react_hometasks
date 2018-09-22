'use strict'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    };
  }

  handleChangeFilter = (filter) => {
    this.setState({selected: filter});
  }

  render() {
    const projects = this.state.selected === 'All' ? 
    this.props.projects :
    this.props.projects.filter(item => item.category === this.state.selected);
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={this.handleChangeFilter} />
        <Portfolio projects={projects} />
      </div>); 
  }
}

