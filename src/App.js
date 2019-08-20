import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Page404 from './pages/404';
import store from './store';
import { Container, GlobalStyle } from './styles';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/user/:id" component={Posts} />
            <Route component={Page404} />
          </Switch>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
