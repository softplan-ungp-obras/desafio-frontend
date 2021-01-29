import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  handleDeleteProcess,
  handleGetProcessList,
  handleAddProcessList,
  ADD_PROCESS,
  GET_PROCESS_LIST,
  LOADING_PROCESS,
  DELETE_PROCESS
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

  it('should dispatch addProcessOnList', async () => {
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

  it('should dispatch deleteProcessAction', async () => {
    // given
    const deleteProcessAction = process => {
      return {
        type: DELETE_PROCESS,
        process
      };
    };
    const processId = '7899c511-4aea-4ab0-b2f2-6a2934e6d5bc';
    const process = {};

    const expectedValue = [deleteProcessAction(process)];
    // when
    const store = mockStore({});
    await store.dispatch(handleDeleteProcess(processId));

    // then
    expect(store.getActions()).toEqual(expectedValue);
  });
});
