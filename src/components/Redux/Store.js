import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';


const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
