import produce from 'immer';

export const Types = {
  GET_REQUEST: 'search/GET_REQUEST',
  GET_SUCCESS: 'search/GET_SUCCESS',
  GET_FAILURE: 'search/GET_FAILURE',
  SET_LOADING: 'search/SET_LOADING',
  SET_TERM: 'search/SET_TERM',
};

export const INITIAL_STATE = {
  data: [],
  term: '',
  loading: false,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.term = action.payload.term;
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
    case Types.SET_LOADING:
      return produce(state, draft => {
        draft.loading = action.payload;
      });
    case Types.SET_TERM:
      return produce(state, draft => {
        draft.term = action.payload;
      });

    default:
      return state;
  }
}

export const Creators = {
  getSearchRequest: term => ({
    type: Types.GET_REQUEST,
    payload: { term },
  }),
  getSearchSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getSearchFailure: () => ({
    type: Types.GET_FAILURE,
  }),
  setLoading: value => ({
    type: Types.SET_LOADING,
    payload: value,
  }),
  setTerm: term => ({
    type: Types.SET_TERM,
    payload: term,
  }),
};
