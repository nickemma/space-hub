import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missions from './missions/missions';

const rootReducer = combineReducers({
  missions,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
