import styled, { css } from 'styled-components'
import { Sizes } from './Sizes.styles.js'
import { Weights } from './Weights.js'
import { Colors } from '../Colors/Colors.js'
import { Spacing } from '../Spacing/Spacing.styles.js'


export const Header = css`
  font-weight: ${Weights.semibold};
  line-height: 120%;
  color: ${Colors.grey[70]};
  margin-top: ${Spacing[0.25]};
  margin-bottom: ${Spacing[0.25]};
`
export const H1 = styled.h1`
  ${Header};
  font-size: ${Sizes.xxxlarge};
`
export const H2 = styled.h2`
  ${Header};
  font-size:  ${Sizes.xxlarge};
`
export const H3 = styled.h3`
  ${Header};
  font-size:  ${Sizes.xlarge};
`
export const H4 = styled.h4`
  ${Header};
  font-size:  ${Sizes.large};
`
export const H5 = styled.h5`
  ${Header};
  font-size:  ${Sizes.medium};
`
export const H6 = styled.h6`
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
    if (props.size === 'large') return Sizes.medium
    if (props.size === 'regular') return Sizes.default
    if (props.size === 'small') return Sizes.small
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case ('semibold'):
        return Weights.semibold
      case ('bold'):
        return Weights.bold
      case ('regular'):
        return Weights.regular
      default:
        return Weights.light
    }
  }};
  margin-top: 0;
  margin-top: ${Spacing[0.25]};
  margin-bottom: ${Spacing[0.25]};
  line-height: 140%;
  color: ${props => {
    switch (props.color) {
      case ('purple'):
        return Colors.purple[60]
      case ('grey'):
        return Colors.grey[50]
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
        return Colors.grey[50];
      default:
        return Colors.grey[70];
    }
  }}
`