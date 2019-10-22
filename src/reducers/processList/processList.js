import { GET_PROCESS_LIST, ADD_PROCESS } from '../../actions/getProcessList';

const initialState = {
  data: [
    {
      descricao: '',
      assunto: '',
      interessados: ['']
    }
  ]
};

export default function processList(state = initialState, action) {
  switch (action.type) {
    case GET_PROCESS_LIST:
      return {
        ...state,
        data: action.data
      };
    case ADD_PROCESS:
      return {
        ...state,
        data: [...state.data, action.process]
      };
    default:
      return state;
  }
}
