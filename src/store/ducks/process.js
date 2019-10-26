import produce from 'immer';

export const Types = {
  GET_REQUEST: 'process/GET_REQUEST',
  GET_SUCCESS: 'process/GET_SUCCESS',
  GET_FAILURE: 'process/GET_FAILURE',

  REMOVE_REQUEST: 'process/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'process/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'process/REMOVE_FAILURE',
};

export const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function process(state = INITIAL_STATE, action) {
  switch (action.type) {
    // GET PROCESS
    case Types.GET_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case Types.GET_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.data = action.payload;
      });
    case Types.GET_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
        draft.data = {};
      });

    // REMOVE PROCESS
    case Types.REMOVE_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case Types.REMOVE_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.data = action.payload;
      });
    case Types.REMOVE_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
        draft.data = {};
      });

    default:
      return state;
  }
}

export const Creators = {
  getProcessRequest: id => ({
    type: Types.GET_REQUEST,
    payload: id,
  }),
  getProcessSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getProcessFailure: () => ({
    type: Types.GET_FAILURE,
  }),
  removeRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: id,
  }),
  removeSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: data,
  }),
  removeFailure: () => ({
    type: Types.REMOVE_FAILURE,
  }),
};
