import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
import Input from '..'
import 'setupTest'

describe('Input.', () => {
  it('Should be render <Input />.', () => {
    const inputRef = React.createRef()
    const onChange = jest.fn()
    const component = shallow(
      <Input
        refInput={inputRef}
        className="class"
        label="E-mail"
        onChange={onChange}
        required
      />
    )
    expect(component).toMatchSnapshot()
  })
})
