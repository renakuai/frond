import styled from 'styled-components';
import { Spacing } from '../../Atoms/Spacing/Spacing.styles.js';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${Spacing[2]};
  margin-top: ${Spacing[3]}
`

export const FrondGrid = styled.div`
  display: grid;
  gap: ${Spacing[2]};
  margin-top: ${Spacing[3]}
`

export const ContentGrid = styled.div`
  grid-column: 2 / 3;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  grid-column: 1 / 3;
  margin-left: auto;
  margin-right: auto;
  gap: ${Spacing[1]}
`