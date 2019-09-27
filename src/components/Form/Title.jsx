import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../styles'

const TitleEl = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })

const Title = ({ element }) => <TitleEl>{element.text}</TitleEl>

export { Title }
