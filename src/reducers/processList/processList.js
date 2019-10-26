/* eslint-disable no-case-declarations */
import { isEqual } from 'lodash';

import {
  GET_PROCESS_LIST,
  ADD_PROCESS,
  LOADING_PROCESS,
  DELETE_PROCESS
} from '../../actions/getProcessList/getProcessList';

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

export default function processList(state = initialState, action) {
  switch (action.type) {
    case GET_PROCESS_LIST:
      return {
        ...state,
        data: action.data
      };
    case ADD_PROCESS:
      const currentState = isEqual(state, initialState)
        ? [].concat(action.process)
        : [...state.data, action.process];
      return {
        data: currentState
      };
    case LOADING_PROCESS:
      return {
        ...state,
        isProcessQueryLoading: action.isLoading
      };
    case DELETE_PROCESS:
      const deletedId = action.process.id;
      const updatedList = state.data.filter(
        process => process.id !== deletedId
      );
      return {
        ...state,
        data: updatedList
      };
    default:
      return state;
  }
}
