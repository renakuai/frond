import styled, { css } from 'styled-components';
import { H6 } from '../../../Atoms/Font/Font.styles';
import { Spacing } from '../../../Atoms/Spacing/Spacing.styles.js';


export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Spaces = css`
  padding: ${Spacing[0.75]} 0 0 ${Spacing[0.5]};
  margin: 0;
`

export const Li = styled.li`
  ${Spaces}
`

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Grid = styled.div`
  grid-column: 2/3;
`