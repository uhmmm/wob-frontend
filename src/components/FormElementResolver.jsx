import React from 'react'
import { connect } from 'react-redux'

import { getElementById } from '../reducers/formElements'
import { elements } from './FormElementTypes'

const FormElementResolver = ({ element }) => {
  if (element) {
    let Element = elements[element.type]
    return Element ? (
      <Element key={element.elementId} element={element}>
        {element.text}
        {element.children &&
          element.children.map(childElementId => {
            return (
              <FormElementResolverConnected
                key={childElementId}
                elementId={childElementId}
              />
            )
          })}
      </Element>
    ) : (
      <div>ViewError: ViewModel cannot be found</div>
    )
  } else {
    return <div>ViewError: ElementId cannot be found</div>
  }
}

const mapStateToProps = (state, { elementId }) => {
  let element = getElementById(state, elementId)
  return {
    element
  }
}

const FormElementResolverConnected = connect(mapStateToProps)(
  FormElementResolver
)

export { FormElementResolver, FormElementResolverConnected }
