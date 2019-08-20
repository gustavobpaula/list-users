import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import store from './store';
import { Container, GlobalStyle } from './styles';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Container>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/user/:id" component={Posts} />
          </Switch>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
