import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('Componente Button', () => {
  it('renderizar sem crash', () => {
    const tree = shallow(<Button>Teste</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('renderizar com parâmetro', () => {
    const onclickFunc = () => coonsole.log('renderizaando com parâmetro');
    const wrap = mount(<Button onclick={onclickFunc} />);
    expect(wrap).toMatchSnapshot();
  });
});
