const ReactRouter = window.ReactRouterDOM;
const { BrowserRouter, Route, Switch, Link } = ReactRouter;

class App extends React.Component {
  render() {
    return (     
        <div>
          <Nav />
          <Switch>
            <Route path="/magazine/subscribtion" component={SubscribtionPage} />
            <Route path="/magazine/article/:id" component={ArticlePage} />
            <Route path="/magazine" component={Homepage} />
          </Switch>
        </div>
    );
  }
}
