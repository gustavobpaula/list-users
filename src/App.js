import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ListUsers from './pages/ListUsers';
import UserPosts from './pages/UserPosts';
import store from './store';
import { Container, GlobalStyle } from './styles';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Container>
          <Switch>
            <Route exact path="/" component={ListUsers} />
            <Route exact path="/user/:id" component={UserPosts} />
          </Switch>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
