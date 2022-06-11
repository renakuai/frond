import styled from 'styled-components';
import { Spacing } from '../../Atoms/Spacing/Spacing.styles.js';

export const Section = styled.section`
  text-align: center;
  margin-top: ${Spacing[2]};
  padding: ${Spacing[1]};
  display: flex;
  flex-direction: column;
  gap: ${Spacing[3]}
`