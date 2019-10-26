import { call, put } from 'redux-saga/effects';
import Toast from '~/components/elements/Toast';
import api from '~/services/api';
import { Creators as ProcessActions } from '~/store/ducks/process';

export function* getProcess(action) {
  try {
    const { data } = yield call(
      api.get,
      `processo${
        !!action && action.payload.id ? `?q=${action.payload.id}` : ''
      }`
    );
    yield put(ProcessActions.getProcessSuccess(data));
  } catch (err) {
    Toast('error', 'Erro ao realizar a busca');
    yield put(ProcessActions.getProcessFailure());
  }
}
