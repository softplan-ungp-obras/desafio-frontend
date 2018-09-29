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

  it('teste de click', () => {
    const onclickFunc = jest.fn();
    const tree = mount(<Button onClick={onclickFunc}>Teste</Button>);

    tree.find('button').simulate('click');
    expect(onclickFunc.mock.calls.length).toEqual(1);
  });
});
