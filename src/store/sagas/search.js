import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as SearchActions } from '~/store/ducks/search';

export function* getSearch() {
  try {
    const response = yield call(api.get, 'processo?q=licenca');

    yield put(SearchActions.getSearchSuccess(response.data));
  } catch (err) {
    yield put(SearchActions.getSearchFailure());
  }
}
