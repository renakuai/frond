import styled from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { Shadows } from '../Shadows/Shadows.js';


export const Button = styled.button
  `
  font-family: 'Karla', sans-serif;
  font-size: ${props => {
    switch (props.size) {
      case ('large'):
        return Sizes.default
      case ('medium'):
        return Sizes.small
      case ('small'):
        return Sizes.xsmall
      default:
        break;
    }
  }};
  font-weight: ${props => {
    if (props.type === 'tertiary') {
      return Weights.regular
    }
    if (props.btnType === 'secondary') {
      return Weights.semibold
    }
  }};
  background-color: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return Colors.jade[30]
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return Colors.white
    }
  }};
  color: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.jade[40]
      case ('tertiary'):
        return Colors.jade[40]
    }
  }};
  border: ${props => (props.btnType === 'secondary') ? ('2px solid' + Colors.grey[20]) : 'none'};
  padding: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return '0.55rem 1.1rem';
      case ('secondary'):
        return '0.55rem 1.1rem'
      case ('tertiary'):
        return '0.5rem 0 0.5rem 0'
    }
  }};
  border-radius: 4px;
  width: ${props => props.width};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return Colors.jade[40]
      case ('secondary'):
        return Colors.cyan[10]
      case ('tertiary'):
        return 'none'
      default:
        return 'none'
    }
  }};
  border: ${props => (props.btnType === 'secondary') ? ('2px solid' + Colors.jade[30]) : 'none'};
    text-decoration: ${props => {
    if (props.btnType === 'tertiary') {
      return 'underline'
    }
    else {
      return 'none'
    }
  }};
  color: ${props => {
    if (props.btnType === 'tertiary') {
      return Colors.jade[40]
    }
  }}
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${Spacing[0.5]};
`

export const Path = styled.path`
  fill: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.jade[30]
      case ('tertiary'):
        return Colors.jade[30]
    }
  }}
  };
  stroke-width: 1.5;
  stroke-linecap: round;
   stroke-linejoin: round
`