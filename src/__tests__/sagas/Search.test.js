import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';
import { getSearch } from '~/store/sagas/search';
import { Creators as SearchActions } from '~/store/ducks/search';

const apiMock = new MockAdapter(api);

describe('Search saga', () => {
  it('Should be able to fetch search and call success', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`processo`).reply(200, ['Node.js']);

    await runSaga({ dispatch }, getSearch).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      SearchActions.getSearchSuccess(['Node.js'])
    );
  });

  it('Should be able to failure search', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`processo`).reply(404, ['Node.js']);

    await runSaga({ dispatch }, getSearch).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      SearchActions.getSearchFailure(['Node.js'])
    );
  });
});
