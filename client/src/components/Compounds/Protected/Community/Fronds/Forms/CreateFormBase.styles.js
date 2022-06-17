import styled, { css } from 'styled-components';
import { Spacing } from '../../../../../Atoms/Spacing/Spacing.styles.js';
import { Colors } from '../../../../../Atoms/Colors/Colors';

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

export const QuestionDiv = styled.div`
  height: 500px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${Colors.grey[10]};
  padding: ${Spacing[1]};
  margin-top: ${Spacing[0.5]};
  margin-bottom: ${Spacing[0.5]};
`