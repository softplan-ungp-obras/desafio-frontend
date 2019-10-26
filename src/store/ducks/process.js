import produce from 'immer';

export const Types = {
  GET_REQUEST: 'process/GET_REQUEST',
  GET_SUCCESS: 'process/GET_SUCCESS',
  GET_FAILURE: 'process/GET_FAILURE',
};

export const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function process(state = INITIAL_STATE, action) {
  switch (action.type) {
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
};
