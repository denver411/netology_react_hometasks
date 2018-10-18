class Articles extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.map(element => {
          return <Article key={element.id} article={element} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <Articles articles={articles} />,
  document.querySelector('.container')
);
