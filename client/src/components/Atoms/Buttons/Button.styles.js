import styled from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';


export const Button = styled.button`
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
    else {
      return Weights.semibold
    }
  }};
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.pink[50]
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return Colors.white
    }
  }};
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.pink[50]
      case ('tertiary'):
        return Colors.pink[50]
    }
  }};
  border: ${props => {
    switch (props.type) {
      case ('primary'):
        return 'none'
      case ('secondary'):
        return '2px solid ' + Colors.pink[20]
      case ('tertiary'):
        return 'none'
    }
  }};
  padding: ${props => {
    switch (props.type) {
      case ('primary'):
        return '0.5rem 0.5rem';
      case ('secondary'):
        return '0.5rem 0.5rem'
      case ('tertiary'):
        return '0.5rem 0 0.5rem 0'
    }
  }};
  border-radius: 4px;
  width: ${props => props.width};
  cursor: pointer;
  text-decoration: ${props => {
    if (props.type === 'tertiary') {
      return 'underline'
    }
    else {
      return 'none'
    }
  }};
  &:hover {
    background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.pink[60]
      case ('secondary'):
        return Colors.pink[10]
      case ('tertiary'):
        return 'none'
    }
  }};
  color: ${props => {
    if (props.type === 'tertiary') {
      return Colors.pink[70]
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
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.pink[50]
      case ('tertiary'):
        return Colors.pink[50]
    }
  }}
  }
`