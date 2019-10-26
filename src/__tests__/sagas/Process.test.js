import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';
import { getProcess, removeProcess } from '~/store/sagas/process';
import { Creators as ProcessActions } from '~/store/ducks/process';

const apiMock = new MockAdapter(api);

describe('process saga', () => {
  it('Should be able to fetch process and call success', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`processo`).reply(200, ['process.js']);

    await runSaga({ dispatch }, getProcess).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      ProcessActions.getProcessSuccess(['process.js'])
    );
  });

  it('Should be able to failure process', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`processo`).reply(404, ['process.js']);

    await runSaga({ dispatch }, getProcess).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      ProcessActions.getProcessFailure(['process.js'])
    );
  });
  it('Should be able to remove process', async () => {
    const dispatch = jest.fn();

    apiMock.onDelete(`processo`).reply(200, ['process.js']);

    await runSaga({ dispatch }, removeProcess).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      ProcessActions.removeSuccess(['process.js'])
    );
  });
});
