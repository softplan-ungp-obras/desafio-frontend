import React from 'react'
import { render } from 'react-dom'
import { SearchProvider } from 'core/utils/context'
import { ThemeProvider } from 'styled-components'
import 'core/assets/style/globalStyle'
import theme from 'core/assets/style/theme'
import Routes from './routes'

const renderApp = () => {
  const app = (
    <SearchProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SearchProvider>
  )

  render(app, document.getElementById('root'))
}

renderApp()
