import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import { formRoutes } from '../FormRouter'
import man from './man.svg'

const imageRoutes = [
  { routeId: 1, source: man },
  { routeId: 2, source: man },
  { routeId: 3, source: man },
  { routeId: 4, source: man },
  { routeId: 5, source: man },
  { routeId: 6, source: man },
  { routeId: 7, source: man },
  { routeId: 8, source: man },
  { routeId: 9, source: man },
  { routeId: 10, source: man },
  { routeId: 11, source: man },
  { routeId: 12, source: man },
  { routeId: 13, source: man }
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
      {imageRoutes.map(imageRoute => (
        <Route
          key={imageRoute.routeId}
          path={
            formRoutes.find(
              formRoute => formRoute.routeId === imageRoute.routeId
            ).path
          }
          component={() => <Image source={imageRoute.source} />}
        />
      ))}
    </Switch>
  )
}

export { Image, ImagesRouter }
