import React from 'react'
import { shallow } from 'enzyme'
import { Spinner } from '../styled'
import theme from '../../../core/constants/theme'

describe('Spinner', () => {
  it('should render', () => {
    const spinner = shallow(<Spinner theme={theme} />)

    expect(spinner).toMatchSnapshot()
  })
})
