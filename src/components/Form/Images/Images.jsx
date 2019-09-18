import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import man from './man.svg'

const imageRoutes = [
  { path: '/form/start', source: man },
  { path: '/form/contact-details', source: man },
  { path: '/form/role', source: man },
  { path: '/form/institute', source: man },
  { path: '/form/subject', source: man },
  { path: '/form/quantity', source: man },
  { path: '/form/specific', source: man },
  { path: '/form/specific-types', source: man },
  { path: '/form/everything', source: man },
  { path: '/form/everything-types', source: man },
  { path: '/form/finish', source: man },
  { path: '/form/extras', source: man },
  { path: '/form/not-found', source: man }
]

const FormImagesContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
})

const Img = styled.img({ width: '100%' })

const Image = ({ source }) => (
  <FormImagesContainer>
    <Img src={source} alt="" />
  </FormImagesContainer>
)

const ImagesRouter = () => {
  return (
    <Switch>
      {imageRoutes.map(route => (
        <Route
          key={route.path}
          path="/form/start"
          component={() => <Image source={route.source} />}
        />
      ))}
    </Switch>
  )
}

export { Image, ImagesRouter }
