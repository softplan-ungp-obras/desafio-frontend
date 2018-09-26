import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import SearchInput from './SearchInput';

configure({ adapter: new Adapter() });

describe('Componente SearchInput', () => {
  it('renderizar sem crash', () => {
    const tree = shallow(<SearchInput />);
    expect(tree).toMatchSnapshot();
  });

  it('renderizar com parâmetro', () => {
    const searchValue = 'Alguma informação a pesquisar';
    const wrap = mount(<SearchInput value={searchValue} />);
    expect(wrap.find('input').prop('value')).toEqual(searchValue);
  });
});
