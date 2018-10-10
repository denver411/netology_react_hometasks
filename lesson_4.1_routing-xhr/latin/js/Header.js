const HeaderComponent = ({ location }) => {
  const articleId = location.pathname.match(/\d+$/);
  return (
    <nav className="navbar navbar-light bg-light">
      {articleId ? (
        <p className="navbar-brand">
          Уникальный идентификатор статьи: {articleId}
        </p>
      ) : (
        <p className="navbar-brand">Статья не выбрана</p>
      )}
    </nav>
  );
};

const { withRouter } = window.ReactRouterDOM;
const Header = withRouter(HeaderComponent);
