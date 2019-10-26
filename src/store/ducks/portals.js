import produce from 'immer';

export const Types = {
  SET_MODAL: 'portals/SET_MODAL',
};

export const INITIAL_STATE = {
  modal: false,
};

export default function portals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_MODAL:
      return produce(state, draft => {
        draft.modal = action.payload;
      });

    default:
      return state;
  }
}

export const Creators = {
  setModal: value => ({
    type: Types.SET_MODAL,
    payload: value,
  }),
};
