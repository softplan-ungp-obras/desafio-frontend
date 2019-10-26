import { all, takeLatest } from 'redux-saga/effects';

import { Types as SearchTypes } from '../ducks/search';

import { getSearch } from './search';

export default function* rootSaga() {
  yield all([takeLatest(SearchTypes.GET_REQUEST, getSearch)]);
}
