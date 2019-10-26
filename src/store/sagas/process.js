import { call, put } from 'redux-saga/effects';
import Toast from '~/components/elements/Toast';
import api from '~/services/api';
import { Creators as ProcessActions } from '~/store/ducks/process';
import { Creators as SearchActions } from '~/store/ducks/search';

export function* getProcess(action) {
  try {
    const { data } = yield call(
      api.get,
      `processo${action ? `/${action.payload}` : ''}`
    );
    yield put(ProcessActions.getProcessSuccess(data));
  } catch (err) {
    Toast('error', 'Erro ao realizar a busca');
    yield put(ProcessActions.getProcessFailure());
  }
}

export function* removeProcess(action) {
  try {
    const { data } = yield call(
      api.delete,
      `processo${action ? `/${action.payload}` : ''}`
    );
    yield put(ProcessActions.removeSuccess(data));
    yield put(SearchActions.getSearchRequest());
  } catch (err) {
    Toast('error', 'Erro ao excluir processo');
    yield put(ProcessActions.removeFailure());
  }
}
