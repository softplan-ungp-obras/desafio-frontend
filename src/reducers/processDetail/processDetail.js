import { GET_PROCESS_DETAIL } from '../../actions/getProcessDetail/getProcessDetail';

import createReducer from '../createReducer';

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

const processDetail = createReducer(initialState, {
  [GET_PROCESS_DETAIL]: (state, action) => ({ ...state, data: action.data })
});

export default processDetail;
