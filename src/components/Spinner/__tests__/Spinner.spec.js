import React from 'react'
import { shallow } from 'enzyme'
import { Spinner } from '../styled'

describe('Spinner', () => {
  it('should render', () => {
    const spinner = shallow(<Spinner />)

    expect(spinner).toMatchSnapshot()
  })
})
