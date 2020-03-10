import createReducer from './createReducer';

describe('createReducer test', () => {
  it('should return the initial state', () => {
    // given
    const defaultState = {};
    const mockaction = () => {};
    // when
    const reducer = createReducer(defaultState, {
      MOCK_ACTION: mockaction
    });
    // then
    expect(reducer(defaultState, '')).toEqual(defaultState);
  });

  it('should return the result current handler', () => {
    // given
    const InitialState = {
      name: ''
    };
    // when
    const reducer = createReducer(InitialState, {
      MOCK_ACTION: (InitialState.name = 'john')
    });

    // then
    expect(reducer(InitialState, 'MOCK_ACTION')).toEqual({ name: 'john' });
  });
});
