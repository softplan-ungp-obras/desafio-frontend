import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import BuscaInput from './BuscaInput';

configure({ adapter: new Adapter() });

describe('Componente BuscaInput', () => {
  it('renderizar sem crash', () => {
    const tree = shallow(<BuscaInput />);
    expect(tree).toMatchSnapshot();
  });

  it('renderizar com parâmetro', () => {
    const searchValue = 'Alguma informação a pesquisar';
    const wrap = mount(<BuscaInput value={searchValue} />);
    expect(wrap.find('input').prop('value')).toEqual(searchValue);
  });
});
