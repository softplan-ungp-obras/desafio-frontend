import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import 'core/assets/style/globalStyle'
import theme from 'core/assets/style/theme'
import App from 'containers/Main'

const renderApp = () => {
  const app = (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )

  render(app, document.getElementById('root'))
}

renderApp()
