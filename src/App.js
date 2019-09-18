import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { store } from './configureStore'
import { Layout } from './components/Layout'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <Layout />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
