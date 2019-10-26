import { all, takeLatest } from 'redux-saga/effects';

import { Types as SearchTypes } from '../ducks/search';
import { Types as ProcessTypes } from '../ducks/process';

import { getSearch } from './search';
import { getProcess, removeProcess } from './process';

export default function* rootSaga() {
  yield all([
    takeLatest(SearchTypes.GET_REQUEST, getSearch),
    takeLatest(ProcessTypes.GET_REQUEST, getProcess),

    takeLatest(ProcessTypes.REMOVE_REQUEST, removeProcess),
  ]);
}
