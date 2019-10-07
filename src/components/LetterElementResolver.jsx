import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { computeElementVisibility } from './letterElementVisibility'

import { LetterVariableResolverConnected } from './LetterVariableResolver'

import { getLetterById } from '../reducers/letters'
import { getDocumentById } from '../reducers/documents'
import { getLetterElById } from '../reducers/letterElements'
import { getFieldById } from '../reducers/fields'
import { getPersonById } from '../reducers/people'
import { getPeriodById } from '../reducers/periods'

import { type } from '../styles'

let LetterElSection = styled.div({})
let LetterElContainer = styled.div({ padding: '0 0 1rem 0' })
let LetterElParagraph = styled.p({
  ...type.content.medium,
  padding: '0 0 1rem 0'
})
let LetterElList = styled.ul({ padding: '0 0 1rem 0', listStyle: 'none' })
let LetterElOrderedList = styled.ol({
  padding: '0 0 1rem 2rem'
})
let LetterElListItem = styled.li({
  display: 'list-item',
  ...type.content.medium,
  listStyle: 'inherit'
})
let LetterElHeader = styled.h3({
  ...type.contentMono.medium,
  padding: '0 0 1rem 0'
})
let LetterElDate = styled.div({ ...type.content.medium, padding: '0 0 1rem 0' })
let LetterElSpan = styled.span({})
let LetterSignature = styled.div({ padding: '4rem 0rem' })

const letterElementTypes = {
  root: LetterElSection,
  container: LetterElContainer,
  paragraph: LetterElParagraph,
  list: LetterElList,
  orderedList: LetterElOrderedList,
  refList: LetterElOrderedList,
  listItem: LetterElListItem,
  header: LetterElHeader,
  date: LetterElDate,
  span: LetterElSpan,
  signature: LetterSignature
}

const LetterElementResolver = ({ letterEl, entity, entityId, isVisible }) => {
  let Element = letterElementTypes[letterEl.type]
  return isVisible ? (
    <Element>
      {letterEl.type !== 'refList' && (
        <LetterVariableResolverConnected
          letterElId={letterEl.elementId}
          entityId={entityId}
          entityType={letterEl.refEntityType}
        />
      )}
      {letterEl.children &&
        letterEl.children.map((letterElId, key) => {
          if (letterEl.type === 'refList') {
            return entity[letterEl.refEntityType].value.map(childEntityId => {
              return (
                <LetterElementResolverConnected
                  key={letterElId + childEntityId}
                  letterElId={letterElId}
                  entityId={childEntityId}
                  entityType={letterEl.refEntityType}
                />
              )
            })
          } else {
            return (
              <LetterElementResolverConnected
                key={letterElId}
                letterElId={letterElId}
                entityId={entityId}
                entityType={letterEl.refEntityType}
              />
            )
          }
        })}
    </Element>
  ) : null
}

const entityTypeSelector = {
  letters: getLetterById,
  documents: getDocumentById,
  fields: getFieldById,
  people: getPersonById,
  periods: getPeriodById
}

const mapStateToProps = (state, { letterElId, entityId, entityType }) => {
  let letterEl = getLetterElById(state, letterElId)
  let entity = entityTypeSelector[entityType](state, entityId)

  console.log(entityType)

  return {
    letterEl,
    entity,
    entityId,
    isVisible: computeElementVisibility({ entity, letterEl })
  }
}

const LetterElementResolverConnected = connect(mapStateToProps)(
  LetterElementResolver
)

export { LetterElementResolverConnected }
