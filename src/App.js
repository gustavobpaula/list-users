import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ListCard from './components/ListCard';
import store from './store';
import { Container, GlobalStyle } from './styles';

function App() {

  store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USERS_START' });
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((res) => {
      dispatch({ type: 'RECEIVE_USERS', payload: res });
    }).catch((err) => {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
    });
  });

  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Container>
          <Switch>
            <Route exact path="/" component={ListCard} />
          </Switch>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
