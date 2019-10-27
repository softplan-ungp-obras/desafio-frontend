import produce from 'immer';

export const Types = {
  SET_MODAL: 'portals/SET_MODAL',
};

export const INITIAL_STATE = {
  modal: false,
  id: '',
};

export default function portals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_MODAL:
      return produce(state, draft => {
        draft.modal = action.payload.modal;
        draft.id = action.payload.id;
      });

    default:
      return state;
  }
}

export const Creators = {
  setModal: (modal, id) => ({
    type: Types.SET_MODAL,
    payload: { modal, id },
  }),
};
