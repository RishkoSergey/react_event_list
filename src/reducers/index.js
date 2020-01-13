import { combineReducers } from 'redux';
import events from './events';
import favorites from './favorites';
import sort from './sort';

export default combineReducers({
  events, 
  favorites,
  sort
});