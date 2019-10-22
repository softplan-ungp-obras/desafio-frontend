import { GET_PROCESS_LIST } from '../../actions/getProcessList';

const initialState = {
  data: []
};

export default function processList(state = initialState, action) {
  switch (action.type) {
    case GET_PROCESS_LIST:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
