import { fontFace } from 'polished'

let type = {
  main: '16px',
  fonts: [
    fontFace({
      fontFamily: 'SourceSansPro',
      fontFilePath: '/fonts/SourceSansPro/SourceSansPro-regular',
      fileFormats: ['ttf'],
      formatHint: true,
      fontWeight: 'normal',
      fontStyle: 'normal'
    }),
    fontFace({
      fontFamily: 'SourceSansPro',
      fontFilePath: '/fonts/SourceSansPro/SourceSansPro-regularItalic',
      fileFormats: ['ttf'],
      formatHint: true,
      fontWeight: 'normal',
      fontStyle: 'italic'
    }),
    fontFace({
      fontFamily: 'SourceSansPro',
      fontFilePath: '/fonts/SourceSansPro/SourceSansPro-Bold',
      fileFormats: ['ttf'],
      formatHint: true,
      fontWeight: 'bold',
      fontStyle: 'normal'
    }),
    fontFace({
      fontFamily: 'Inconsolata',
      fontFilePath: '/fonts/Inconsolata/Inconsolata-Regular',
      fileFormats: ['ttf'],
      formatHint: true,
      fontWeight: 'normal',
      fontStyle: 'normal'
    })
  ]
}

type.title = {}
type.title.large = {
  fontFamily: 'SourceSansPro',
  fontSize: '4rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '5rem',
  letterSpacing: '0.12rem'
}

type.title.medium = {
  fontFamily: 'SourceSansPro',
  fontSize: '3.375rem',
  fontWeight: '600',
  fontStyle: 'normal',
  lineHeight: '4rem',
  letterSpacing: 'normal'
}

type.title.small = {
  fontFamily: 'SourceSansPro',
  fontSize: '2.5rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '4rem'
}

type.title.xsmall = {
  fontFamily: 'SourceSansPro',
  fontSize: '2rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '3rem'
}

type.content = {}
type.content.largeHead = {
  fontFamily: 'SourceSansPro',
  fontSize: '2rem',
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: '3rem'
}

type.content.large = {
  fontFamily: 'SourceSansPro',
  fontSize: '2rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '3rem'
}

type.content.mediumSpacedHead = {
  fontFamily: 'SourceSansPro',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: '3rem'
}

type.content.mediumSpaced = {
  fontFamily: 'SourceSansPro',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '3rem'
}

type.content.mediumHead = {
  fontFamily: 'SourceSansPro',
  fontSize: '1.5rem',
  fontWeight: '600',
  fontStyle: 'normal',
  lineHeight: '2rem'
}

type.content.mediumEmphasis = {
  fontFamily: 'SourceSansPro',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  fontStyle: 'italic',
  lineHeight: '2rem'
}

type.content.medium = {
  fontFamily: 'SourceSansPro',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '2rem'
}

type.content.smallHead = {
  fontFamily: 'SourceSansPro',
  fontSize: '1rem',
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: '2rem'
}

type.content.small = {
  fontFamily: 'SourceSansPro',
  fontSize: '1rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '2rem'
}

type.contentMono = {}
type.contentMono.medium = {
  fontFamily: 'Inconsolata',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '2rem'
}

type.contentMono.small = {
  fontFamily: 'Inconsolata',
  fontSize: '1rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: '2rem',
  textAlign: 'left'
}

export default type
