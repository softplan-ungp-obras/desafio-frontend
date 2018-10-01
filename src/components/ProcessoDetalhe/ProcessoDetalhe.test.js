import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import ProcessoDetalhe from './ProcessoDetalhe';

configure({ adapter: new Adapter() });

const processo = {
  id: '1001',
  numero: '1001/2018',
  assunto: 'Processo Teste',
  descricao: 'Descrição processo',
  interessados: ['João da Silva'],
};

describe('Componente ProcessoDetalhe', () => {
  it('renderizar sem crash', () => {
    const tree = shallow(<ProcessoDetalhe processo={processo} />);
    expect(tree).toMatchSnapshot();
  });

  it('edição de processo', () => {
    const onEditProcesso = jest.fn();
    const tree = mount(<ProcessoDetalhe processo={processo} editProcesso={onEditProcesso} />);

    tree.find('#editProcesso').simulate('click');
    expect(onEditProcesso.mock.calls.length).toEqual(1);
  });

  it('apagar processo', () => {
    const apagarProcesso = jest.fn();
    const tree = mount(<ProcessoDetalhe processo={processo} apagarProcesso={apagarProcesso} />);

    tree.find('#apagaProcesso').simulate('click');
    expect(apagarProcesso.mock.calls.length).toEqual(1);
  });
});
