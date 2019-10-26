import reducer, {
  INITIAL_STATE,
  Creators as ProcessActions,
} from '~/store/ducks/process';

describe('Reducer process', () => {
  it('should be able add process', () => {
    const mockData = { id: '155487-7878' };

    const state = reducer(
      INITIAL_STATE,
      ProcessActions.getProcessSuccess(mockData)
    );

    expect(state).toStrictEqual({
      data: mockData,
      loading: false,
    });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(INITIAL_STATE);
  });
});
