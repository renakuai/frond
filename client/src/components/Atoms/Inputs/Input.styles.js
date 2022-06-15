import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { Weights } from '../Font/Weights'

export const Standards = css
  `font-size: ${props => {
    switch (props.size) {
      case ('large'):
        return Sizes.default
      case ('small'):
        return Sizes.small
    }
  }};
  padding: ${Spacing[0.5]};
  border: 1px solid ${Colors.grey[30]};
  border-radius: 4px;
  }}
`

export const Label = styled.label`
  font-size: ${Sizes.small};
  font-weight: ${Weights.semibold};
  color: ${Colors.grey[70]};
  text-align: left;
  margin: 0;
`

export const Input = styled.input.attrs((props) => {
  switch (props.type) {
    case ('text'):
      return 'type: text'
    case ('password'):
      return 'type: password'
    case ('email'):
      return 'type: email'
    case ('date'):
      return 'type: date'
    case ('number'):
      return 'type: number'
  }
})
  `${Standards}
`

export const InputCheckbox = styled.input.attrs({
  type: 'checkbox'
})
  `${Standards}
`

export const InputRadio = styled.input.attrs({
  type: 'radio'
})
  `${Standards}
`