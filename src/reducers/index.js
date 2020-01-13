import { combineReducers } from 'redux';
import events from './events';
import favorites from './favorites';

export default combineReducers({
  events, 
  favorites
});