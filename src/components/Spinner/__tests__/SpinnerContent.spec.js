import React from 'react'
import { shallow } from 'enzyme'
import SpinnerContent from '../SpinnerContent'

describe('SpinnerContent', () => {
  it('should render', () => {
    const spinner = shallow(<SpinnerContent />)

    expect(spinner).toMatchSnapshot()
  })
})
