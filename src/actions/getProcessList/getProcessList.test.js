import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  handleGetProcessList,
  handleAddProcessList,
  ADD_PROCESS,
  GET_PROCESS_LIST,
  LOADING_PROCESS
} from './getProcessList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test if the actions are called', () => {
  it('should dispatch getProcessList', async () => {
    // given
    const isProcessQueryLoading = (isLoading = false) => {
      return {
        type: LOADING_PROCESS,
        isLoading
      };
    };

    const getProcessList = data => {
      return {
        type: GET_PROCESS_LIST,
        data
      };
    };

    const expectedValue = [
      isProcessQueryLoading(true),
      getProcessList({}),
      isProcessQueryLoading(false)
    ];

    // when
    const store = mockStore({});
    const searchTerm = 'licenca';
    await store.dispatch(handleGetProcessList(searchTerm));

    // then
    expect(store.getActions()).toEqual(expectedValue);
  });

  it('should dispatch handleAddProcessList', async () => {
    // given
    const addProcessOnList = process => {
      return {
        type: ADD_PROCESS,
        process
      };
    };
    const process = {
      descricao: 'Processo teste',
      assunto: 'Licença',
      interessados: ['marcio costa', 'Maria da silva']
    };

    const expectedValue = [addProcessOnList(process)];

    // when
    const store = mockStore({});
    await store.dispatch(handleAddProcessList(process));

    // then
    expect(store.getActions()).toEqual(expectedValue);
  });
});
