import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return { ...state, fetching: true };
    case 'FETCH_USERS_ERROR':
      return { ...state, fetching: false, error: action.payload };
    case 'RECEIVE_USERS':
      return {
        ...state, fetching: false, fetched: true, users: action.payload,
      };
    default:
      return state;
  }
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(users, middleware);

export default store;
