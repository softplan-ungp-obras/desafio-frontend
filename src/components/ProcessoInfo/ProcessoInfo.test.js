import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import ProcessoInfo from './ProcessoInfo';

configure({ adapter: new Adapter() });

const processo = {
  id: '1001',
  numero: '1001/2018',
  assunto: 'Processo Teste',
  descricao: 'Descrição processo',
  interessados: ['João da Silva'],
};

describe('Componente ProcessoInfo', () => {
  it('renderizar sem crash', () => {
    const tree = shallow(<ProcessoInfo processo={processo} />);
    expect(tree).toMatchSnapshot();
  });

  it('teste de onSelect', () => {
    const onSelectFunc = jest.fn();
    const tree = mount(<ProcessoInfo processo={processo} onSelect={onSelectFunc} />);

    tree
      .find('div')
      .first()
      .simulate('click');
    expect(onSelectFunc.mock.calls.length).toEqual(1);
  });
});
