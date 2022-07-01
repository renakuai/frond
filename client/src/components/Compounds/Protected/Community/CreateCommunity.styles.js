import styled, { css } from 'styled-components';
import { Spacing } from '../../../Atoms/Spacing/Spacing.styles.js';
import { Colors } from '../../../Atoms/Colors/Colors';

export const Grid = styled.div`
  width: 600px;
  display: grid;
  gap: ${Spacing[2]};
  margin-top: ${Spacing[3]}
`

export const P = styled.p`
margin: 0;
margin-top: 0.5rem;
`