import { combineReducers } from 'redux';
import playlists from './playlists';
import error from './error';

export default combineReducers({
  playlists,
  error,
});
