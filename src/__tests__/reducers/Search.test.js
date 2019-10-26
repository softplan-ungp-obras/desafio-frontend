import reducer, {
  INITIAL_STATE,
  Creators as SearchActions,
} from '~/store/ducks/search';

describe('Reducers search', () => {
  it('should be able to success add itens', () => {
    const state = reducer(
      INITIAL_STATE,
      SearchActions.getSearchSuccess([1, 2, 3])
    );

    expect(state).toStrictEqual({
      data: [1, 2, 3],
      loading: false,
    });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual(INITIAL_STATE);
  });

  // it('get itens', () => {
  //   const state = reducer(INITIAL_STATE, SearchActions.getSteps());

  //   expect(state).toStrictEqual({
  //     data: [],
  //     loading: true,
  //   });
  // });
});
