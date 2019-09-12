import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './configureStore'

import { LayoutRouter } from './components/Layout/LayoutRouter'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
