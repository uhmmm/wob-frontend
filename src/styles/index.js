import type from './typography'
import colors from './colors'
import { normalize } from 'polished'

const globalStyles = {
  ...normalize(),
  ...type.fonts,
  '*': {
    boxSizing: 'border-box'
  },
  html: {
    margin: '0',
    padding: '0',
    height: '100%',
    width: '100%',
    fontSize: type.main
  },
  body: {
    margin: '0',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  a: {
    textDecoration: `none ${colors.day}`,
    color: 'unset',
    ':hover': {
      textDecoration: `underline ${colors.day}`
    }
  },
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  'h1, h2, h3, h4, h5, h6, p, q, i, label, strong, button': {
    margin: '0'
  }
}

const media = [
  '@media (min-width: 0px) and (max-width: 600px)',
  '@media (min-width: 600px) and (max-width: 800px)',
  '@media (min-width: 800px) and (max-width: 1100px)',
  '@media (min-width: 1200px) and (max-width: 1600px)',
  '@media (min-width: 1600px) and (max-width: 1900px)',
  '@media (min-width: 1900px)'
]

export { colors, type, media, globalStyles }
