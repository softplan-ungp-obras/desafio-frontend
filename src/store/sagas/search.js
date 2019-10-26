import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/routes/history';
import { Creators as SearchActions } from '~/store/ducks/search';

export function* getSearch(action) {
  try {
    const response = yield call(
      api.get,
      `processo${!!action && action.payload ? `?q=${action.payload.data}` : ''}`
    );

    yield put(SearchActions.getSearchSuccess(response.data));
    if (action.payload.redirect) {
      history.push(`/dashboard`);
    }
  } catch (err) {
    yield put(SearchActions.getSearchFailure());
  }
}
