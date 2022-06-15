import styled from 'styled-components'

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  box-shadow: 0px 4px 4px rgba(210, 210, 210, 0.25);
`

export const Grid = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`