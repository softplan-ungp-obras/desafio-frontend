import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import ProcessRoster from './ProcessRoster';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockLocation = {
  state: {
    processId: 'c05a14b8-9f98-4e4d-908c-050e0c46a7f2'
  }
};

describe('ProcessRoster', () => {
  it('should render the component correctly', () => {
    // given
    const mockProcessList = {
      data: [
        {
          id: 'c05a14b8-9f98-4e4d-908c-050e0c46a7f2',
          numero: 'SOFT 2020/00001',
          entrada: '10/02/2019',
          interessados: ['João da Silva'],
          descricao:
            'Solicitação de licença-prêmio referente ao período 02/06/2015 - 01/06/2018',
          assunto: 'Licença'
        }
      ]
    };
    const store = mockStore({ processList: { ...mockProcessList } });

    // when
    const component = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <ProcessRoster />
        </MemoryRouter>
      </Provider>
    );

    // then
    expect(component).toMatchSnapshot('regular_list');
  });

  it('should render no results component', () => {
    // given
    const mockProcessList = {
      data: []
    };
    const store = mockStore({
      processList: {
        ...mockProcessList
      }
    });

    // when
    const component = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <ProcessRoster />
        </MemoryRouter>
      </Provider>
    );

    // then
    expect(component).toMatchSnapshot('no_results');
  });
});
