import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';
import { getProcess } from '~/store/sagas/process';
import { Creators as ProcessActions } from '~/store/ducks/process';

const apiMock = new MockAdapter(api);

describe('List saga', () => {
  it('Should be able to fetch List and call success', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`processo`).reply(200, ['list.js']);

    await runSaga({ dispatch }, getProcess).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      ProcessActions.getProcessSuccess(['list.js'])
    );
  });

  it('Should be able to failure list', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`processo`).reply(404, ['list.js']);

    await runSaga({ dispatch }, getProcess).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      ProcessActions.getProcessFailure(['list.js'])
    );
  });
});
