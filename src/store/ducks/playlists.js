import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return Immutable.merge(state, { loading: true });
    case Types.GET_SUCCESS:
      return Immutable.merge(state, {
        loading: false,
        data: action.payload.data.Search,
      });
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
