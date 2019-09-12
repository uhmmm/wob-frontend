import { applyMiddleware, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers/index.js'

const logger = createLogger({
  diff: true,
  duration: true,
  collapsed: true
})
const composeEnhancers = composeWithDevTools({ trace: true })

const middleware =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(logger))
    : null

const store = createStore(reducers, middleware)

if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}
}

export { store }
