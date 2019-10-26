import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { handleGetProcessDetail, GET_PROCESS_DETAIL } from './getProcessDetail';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test if actions are called', () => {
  it('should dispach getProcessDetail', async () => {
    // given
    const getProcessDetailAction = data => {
      return {
        type: GET_PROCESS_DETAIL,
        data
      };
    };

    const expectedValue = [getProcessDetailAction({})];

    // when
    const store = mockStore({});
    const searchTerm = 'c6b01d83-5eb3-4472-9f42-a9ee7245e490';
    await store.dispatch(handleGetProcessDetail(searchTerm));

    // then
    expect(store.getActions()).toEqual(expectedValue);
  });
});
