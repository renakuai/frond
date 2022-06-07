import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';

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
  color: ${Colors.grey[50]}
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
    case ('checkbox'):
      return 'type: checkbox'
  }
})
  `${Standards}
`