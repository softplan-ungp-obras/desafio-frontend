import { GET_PROCESS_DETAIL } from '../../actions/getProcessDetail/getProcessDetail';

const initialState = {
  data: {
    id: '',
    numero: '',
    entrada: '',
    interessados: [],
    descricao: '',
    assunto: ''
  }
};

export default function processDetail(state = initialState, action) {
  switch (action.type) {
    case GET_PROCESS_DETAIL:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
