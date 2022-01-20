import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
