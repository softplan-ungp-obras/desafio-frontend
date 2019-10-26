import { combineReducers } from 'redux';
import search from './search';
import process from './process';
import portals from './portals';

export default combineReducers({
  search,
  process,
  portals,
});
