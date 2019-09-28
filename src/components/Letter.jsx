import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { includes } from 'lodash'

import { getRouteBySlug } from '../reducers/routes'
import { getLetterVisibility } from '../reducers/ui'
import { colors, type } from '../styles'

const LetterArea = styled.section(({ fullScreen }) => ({
  position: fullScreen ? 'relative' : 'absolute',
  top: '0',
  left: !fullScreen && '-4rem',
  width: !fullScreen ? 'calc(50vw + 8rem)' : '100%',
  height: '100%',
  padding: '14rem 0',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'scroll'
}))

const LetterAreaInner = styled.div({})

const LetterHeader = styled.div({
  width: '50vw',
  padding: '0 0 3rem 4rem'
})

const Title = styled.h2({
  ...type.title.medium
})

const Label = styled.label({
  ...type.content.medium,
  color: colors.darkGrey
})

const LetterContainer = styled.div(({ fullScreen }) => ({
  flex: '1 1 50vw',
  width: !fullScreen ? 'calc(50vw + 8rem)' : '70vw',
  height: '130vh',
  boxShadow: '0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902)',
  background: colors.white,
  padding: '8rem'
}))

const LetterText = styled.p({ ...type.content.medium, color: colors.darkGrey })

const Letter = ({ fullScreen, visible }) => {
  return visible ? (
    <LetterArea fullScreen={fullScreen}>
      <LetterAreaInner>
        {fullScreen && (
          <LetterHeader>
            <Title>Review</Title>
            <Label>Ontslagregeling belastingdienst</Label>
          </LetterHeader>
        )}
        <LetterContainer fullScreen={fullScreen}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
            return (
              <div key={value}>
                <LetterText>Ministerie van Financiën</LetterText>
                <LetterText>t.a.v. Menno Snel</LetterText>
                <LetterText>Korte Voorhout 7</LetterText>
                <LetterText>2511 CW Den Haag</LetterText>
                <LetterText>.</LetterText>
                <LetterText>.</LetterText>
              </div>
            )
          })}
        </LetterContainer>
      </LetterAreaInner>
    </LetterArea>
  ) : null
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  let fullScreen = route && includes(route.letter, 'fullScreen')
  return {
    fullScreen,
    visible: fullScreen
      ? true
      : getLetterVisibility(state) && includes(route.letter, 'showToggle')
  }
}

const LetterConnected = withRouter(connect(mapStateToProps)(Letter))

export { LetterConnected }
