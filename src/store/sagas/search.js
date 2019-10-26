import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/routes/history';
import { Creators as SearchActions } from '~/store/ducks/search';

export function* getSearch(action) {
  try {
    const { data } = yield call(
      api.get,
      `processo${
        !!action && action.payload.term ? `?q=${action.payload.term}` : ''
      }`
    );

    yield put(SearchActions.getSearchSuccess(data));

    history.push(`/dashboard`);
  } catch (err) {
    yield put(SearchActions.getSearchFailure());
  }
}
