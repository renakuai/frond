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
  font-weight: ${Weights.semibold};
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.purple[40]
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
        return Colors.purple[50]
      case ('tertiary'):
        return Colors.purple[50]
    }
  }};
  border: ${props => {
    switch (props.type) {
      case ('primary'):
        return 'none'
      case ('secondary'):
        return '2px solid' + Colors.purple[20]
      case ('tertiary'):
        return 'none'
    }
  }};
  padding: ${Spacing[0.5]} ${Spacing[1]};
  border-radius: 4px;
  width: ${props => props.width};
  cursor: pointer;
  &:hover {
    background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.purple[60]
      case ('secondary'):
        return Colors.purple[10]
      case ('tertiary'):
        return Colors.purple[10]
    }
  }};
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
        return Colors.purple[30]
      case ('tertiary'):
        return Colors.purple[30]
    }
  }}
`