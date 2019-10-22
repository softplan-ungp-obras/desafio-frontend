import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { handleGetProcessList, GET_PROCESS_LIST } from './getProcessList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test if the actions are called', () => {
  it('should dispatch getProcessList', async () => {
    // given
    const getProcessList = data => {
      return {
        type: GET_PROCESS_LIST,
        data
      };
    };
    const expectedValue = [getProcessList({})];

    // when
    const store = mockStore({});
    const searchTerm = 'licenca';
    await store.dispatch(handleGetProcessList(searchTerm));

    // then
    expect(store.getActions()).toEqual(expectedValue);
  });
});
