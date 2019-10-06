import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers/index.js'
import { createLetter } from './actions/letters.js'
import { createDocument } from './actions/documents.js'
import { createPerson } from './actions/people'
import { createField } from './actions/fields'

const logger = createLogger({
  diff: true,
  duration: true,
  collapsed: true
})
const composeEnhancers = composeWithDevTools({ trace: true })

const middleware =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(logger))
    : {}

const store = createStore(reducers, middleware)

if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}
}

// setup initial store:
store.dispatch(createLetter())
const letterId = store.getState().letters.allIds[0]
store.dispatch(createDocument(letterId))
store.dispatch(createDocument(letterId))
const documentId = store.getState().documents.allIds[0]
const documentId2 = store.getState().documents.allIds[1]
store.dispatch(createPerson(documentId))
store.dispatch(createPerson(documentId))
store.dispatch(createPerson(documentId))
store.dispatch(createField(documentId))
store.dispatch(createField(documentId))
store.dispatch(createField(documentId))
store.dispatch(createPerson(documentId2))
store.dispatch(createPerson(documentId2))
store.dispatch(createPerson(documentId2))
store.dispatch(createField(documentId2))
store.dispatch(createField(documentId2))
store.dispatch(createField(documentId2))

export { store }
