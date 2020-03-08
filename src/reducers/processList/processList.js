/* eslint-disable no-case-declarations */
import { isEqual } from 'lodash';

import {
  GET_PROCESS_LIST,
  ADD_PROCESS,
  LOADING_PROCESS,
  DELETE_PROCESS
} from '../../actions/getProcessList/getProcessList';

import createReducer from '../createReducer';

const initialState = {
  data: [
    {
      descricao: '',
      assunto: '',
      interessados: ['']
    }
  ],
  isProcessQueryLoading: null
};

const processList = createReducer(initialState, {
  [GET_PROCESS_LIST]: (state, action) => ({ ...state, data: action.data }),
  [ADD_PROCESS]: (state, action) => {
    const currentState = isEqual(state, initialState)
      ? [].concat(action.process)
      : [...state.data, action.process];
    return {
      data: currentState
    };
  },
  [LOADING_PROCESS]: (state, action) => ({
    ...state,
    isProcessQueryLoading: action.isLoading
  }),
  [DELETE_PROCESS]: (state, action) => {
    const deletedId = action.process.id;
    const updatedList = state.data.filter(process => process.id !== deletedId);
    return {
      ...state,
      data: updatedList
    };
  }
});

export default processList;
