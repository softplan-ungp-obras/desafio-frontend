import { combineReducers } from 'redux';

import processDetail from './processDetail/processDetail';
import processList from './processList/processList';

export default combineReducers({
  processList,
  processDetail
});
