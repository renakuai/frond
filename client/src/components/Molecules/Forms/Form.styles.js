import styled from 'styled-components';
import { Spacing } from '../../Atoms/Spacing/Spacing.styles.js';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Spacing[1]};
  width: ${props => {
    return props.width
  }};
  padding: ${Spacing[1.5]};
  margin-left: auto;
  margin-right: auto;
  align-items: ${props => props.alignment};
  background: #FFFFFF;
  box-shadow: 1px 2px 16px rgba(141, 141, 141, 0.25);
  border-radius: 8px;
`