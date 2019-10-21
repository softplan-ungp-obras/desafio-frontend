import { GET_PROCESS_LIST } from '../actions/getProcessList';

export default function categories (state = {}, action) {
  switch (action.type) {
    case GET_PROCESS_LIST:
      return {
        ...state,
        ...action.processList
      }
    default:
      return state;
  }
}
