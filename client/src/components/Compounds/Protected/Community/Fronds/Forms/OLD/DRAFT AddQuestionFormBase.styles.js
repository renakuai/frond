import styled, { css } from 'styled-components';
import { Spacing } from '../../../../../Atoms/Spacing/Spacing.styles.js';

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

export const ModalForm = styled.form`
  ${FormStyles};
  margin: ${Spacing[1.25]}; 0 ${Spacing[1.25]}; 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
