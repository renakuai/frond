import styled, { css } from 'styled-components';
import { H6 } from '../../../Atoms/Font/Font.styles';
import { Spacing } from '../../../Atoms/Spacing/Spacing.styles.js';


export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 280px;
`

export const Spaces = css`
  margin: ${Spacing[1]} 0 ${Spacing[1]} 0;
`

export const Li = styled.li`
width: 100%;
  ${Spaces}
`

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`

export const Grid = styled.div`
  grid-column: 2/3;
`