import { combineReducers } from 'redux';
import search from './search';
import process from './process';

export default combineReducers({
  search,
  process,
});
