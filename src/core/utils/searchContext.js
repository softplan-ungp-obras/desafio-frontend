import React from 'react'
import { SearchConsumer } from 'core/utils/context'

export function withSearchContext(Comp) {
  return function WrappedWith(props) {
    return (
      <SearchConsumer>
        {({ state, actions }) => <Comp {...props} actions={actions} state={state} />}
      </SearchConsumer>
    )
  }
}
