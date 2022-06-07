import styled from 'styled-components';
import { Spacing } from '../../Atoms/Spacing/Spacing.styles.js';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${props => {
    return props.width
  }};
  padding: ${Spacing[1]};
  margin-left: auto;
  margin-right: auto;
`