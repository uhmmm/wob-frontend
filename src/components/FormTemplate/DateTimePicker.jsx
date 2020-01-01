import React from 'react'
import styled from '@emotion/styled'

import DateRangePicker from '@wojtekmaj/react-daterange-picker'
// import { colors, type } from '../../styles'

const DataTimeContainer = styled.div({
  position: 'relative'
})

const DateTimePicker = () => {
  return (
    <DataTimeContainer>
      <DateRangePicker />
    </DataTimeContainer>
  )
}

export { DateTimePicker }
