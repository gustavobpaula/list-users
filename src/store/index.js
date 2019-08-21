import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const INITIAL_STATE = {
  user: {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  },
  users: {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  },
  posts: {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  },
};

function users(state = INITIAL_STATE, action) {
  const caseTarget = action.meta && action.meta.toUpperCase();

  switch (action.type) {
    case `FETCH_${caseTarget}_PENDING`:
      return { ...state, [action.meta]: { ...state[action.meta], fetching: true } };
    case `FETCH_${caseTarget}_REJECTED`:
      return {
        ...state,
        [action.meta]: {
          ...state[action.meta],
          fetching: false,
          error: action.payload,
        },
      };
    case `FETCH_${caseTarget}_FULFILLED`:
      return {
        ...state,
        [action.meta]: {
          ...state[action.meta],
          fetching: false,
          fetched: true,
          error: null,
          data: action.payload,
        },
      };
    default:
      return state;
  }
}

const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(users, middleware);

export default store;
