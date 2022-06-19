import styled from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { Shadows } from '../Shadows/Shadows.js';


export const Button = styled.button
  `
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
  font-weight: ${Weights.semibold};
  background-color: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return Colors.grey[70]
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
        return Colors.grey[60]
      case ('tertiary'):
        return Colors.grey[60]
    }
  }};
  border: none;
  padding: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return '0.6rem 1.1rem';
      case ('secondary'):
        return '0.6rem 1.1rem'
      case ('tertiary'):
        return '0.5rem 0 0.5rem 0'
    }
  }};
  border-radius: 8px;
  width: ${props => props.width};
  cursor: pointer;
  text-decoration: none;
  box-shadow: ${props => {
    if (props.btnType === 'secondary') {
      return Shadows.default;
    }
    else {
      return 'none'
    }
  }};
  &:hover {
    background-color: ${props => {
    switch (props.btnType) {
      case ('primary'):
        return Colors.black
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return 'none'
      default:
        return 'none'
    }
  }};
  text-decoration: ${props => {
    if (props.btnType === 'tertiary') {
      return 'underline'
    }
    else {
      return 'none'
    }
  }};
box-shadow: ${props => {
    if (props.btnType === 'secondary') {
      return Shadows.hover;
    }
    else {
      return 'none'
    }
  }};
  color: ${props => {
    if (props.btnType === 'tertiary') {
      return Colors.black
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
        return Colors.grey[60]
      case ('tertiary'):
        return Colors.grey[60]
    }
  }}
  }
`