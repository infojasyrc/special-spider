import React, { Component } from 'react'
import Main from './components/Main/Main'

import ThemeProvider from './providers/ThemeProvider'
import Routes from './routes/Routes'

import { LayoutProvider, UserProvider } from './shared/contexts'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <UserProvider>
          <LayoutProvider>
            <Main>
              <Routes />
            </Main>
          </LayoutProvider>
        </UserProvider>
      </ThemeProvider>
    )
  }
}

export default App
