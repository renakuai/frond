import styled, { css } from 'styled-components';
import { Spacing } from '../../Atoms/Spacing/Spacing.styles.js';

export const FormStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${Spacing[1]};
  width: ${props => {
    return props.width
  }};
  align-items: ${props => props.alignment};
  background: #FFFFFF;
`
export const AuthForm = styled.form`
  ${FormStyles};
  padding: ${Spacing[1.5]};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 2px 16px rgba(141, 141, 141, 0.25);
  border-radius: 8px;
`

export const CreateForm = styled.form`
  ${FormStyles};
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: ${props => {
    switch (props.direction) {
      case ('horizontal'):
        return 'row'
      case ('vertical'):
        return 'column'
    }
  }};
  gap: 4px;
  width: inherit;
  align-items: ${props => {
    switch (props.direction) {
      case ('horizontal'):
        return 'center'
      case ('vertical'):
        return 'none'
    }
  }};
`