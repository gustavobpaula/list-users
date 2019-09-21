import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import users from './reducer';


const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(users, middleware);

export default store;
