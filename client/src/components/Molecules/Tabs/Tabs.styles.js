import styled, { css } from 'styled-components';
import { Spacing } from '../../Atoms/Spacing/Spacing.styles.js';
import { Colors } from '../../Atoms/Colors/Colors.js';



export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: ${Spacing[1]};
`

export const Spaces = css`
  margin: ${Spacing[1]} 0 ${Spacing[1]} 0;
`

export const Li = styled.li`
  ${Spaces}
`

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${Spacing[1]};
  border-bottom: 1px solid ${Colors.grey[30]}
`

export const Grid = styled.div`
  grid-column: 2/3;
`