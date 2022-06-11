import styled, { css } from 'styled-components'
import { Sizes } from './Sizes.styles.js'
import { Weights } from './Weights.js'
import { Colors } from '../Colors/Colors.js'


export const Header = css`
  font-family: 'Libre Baskerville', serif;
  weight: ${Weights.bold};
  margin: 0;
  line-height: 120%;
  color: ${Colors.grey[70]}
`
export const H1 = styled.h1`
  ${Header}
  font-size: ${Sizes.xxxlarge};
`
export const H2 = styled.h2`
  ${Header}
  font-size:  ${Sizes.xxlarge};
`
export const H3 = styled.h3`
  ${Header}
  font-size:  ${Sizes.xlarge};
`
export const H4 = styled.h4`
  ${Header}
  font-size:  ${Sizes.large};
`
export const H5 = styled.h5`
  ${Header}
  font-size:  ${Sizes.medium};
`
export const H6 = styled.h6`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: ${Weights.semibold};
  font-size: ${Sizes.xsmall};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin:0;
  line-height: 120%;
  margin-top 1rem;
  padding: 0;
  color: ${props => {
    switch (props.color) {
      case ('purple'):
        return Colors.purple[60]
      case ('grey'):
        return Colors.grey[40]
      default:
        break;
    }
  }}
`

export const P = styled.p`
  font-size: ${props => {
    if (props.size === 'regular') return Sizes.regular
    if (props.size === 'small') return Sizes.small
  }}
  line-height: 120%;
  margin:0;
  color: ${props => {
    switch (props.color) {
      case ('purple'):
        return Colors.purple[60]
      case ('grey'):
        return Colors.grey[70]
      default:
        return Colors.grey[70];
    }
  }}
`

export const Label = styled.p`
  font-size:  ${Sizes.xsmall};
  line-height: 120%;
  margin:0;
  color: ${props => {
    switch (props.color) {
      case ('purple'):
        return Colors.purple[60];
      case ('grey'):
        return Colors.grey[70];
      default:
        return Colors.grey[70];
    }
  }}
`