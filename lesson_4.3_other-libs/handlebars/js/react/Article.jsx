class Article extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <article className="article">
        <h2>{article.subject}</h2>
        <p>{article.body}</p>
      </article>
    );
  }
}
