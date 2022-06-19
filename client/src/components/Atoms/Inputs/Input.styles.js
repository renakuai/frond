import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { Weights } from '../Font/Weights'

export const Standards = css`
  font-size: ${Sizes.regular};
  padding: ${Spacing[0.5]};
  border: 2px solid ${Colors.grey[20]};
  border-radius: 4px;
  }}
`

export const Label = styled.label`
  font-size: ${Sizes.regular};
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
  `
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 30%;
  background-color: #FFFFFF;
  transition: background 300ms;
  cursor: pointer;
  ${Standards};
  &:before {
    content: '',
    color: transparent;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    border: 0;
    background-color: transparent;
    background-size: contain;
    box-shadow: inset 0 0 0 1px ${Colors.grey[20]};
  };
  &:checked {
    background-color: ${Colors.blue[20]};
    background-image: url(/Icons/check.svg);
    background-position: left top;
    background-repeat: no-repeat;
  }
`

export const InputRadio = styled.input.attrs({
  type: 'radio'
})
  `${Standards}
`