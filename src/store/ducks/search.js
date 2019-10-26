import produce from 'immer';

export const Types = {
  GET_REQUEST: 'search/GET_REQUEST',
  GET_SUCCESS: 'search/GET_SUCCESS',
  GET_FAILURE: 'search/GET_FAILURE',
};

export const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function documents(state = INITIAL_STATE, action) {
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
      });

    default:
      return state;
  }
}

export const Creators = {
  getSearchRequest: () => ({ type: Types.GET_REQUEST }),

  getSearchSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getSearchFailure: () => ({
    type: Types.GET_FAILURE,
  }),
};
