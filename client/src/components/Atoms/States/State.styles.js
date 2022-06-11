import styled from 'styled-components';


export const State = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: ${props => props.width};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  grid-column: ${props => props.fullPage && '1 / 4'};
`

export const Img = styled.img`
  height: auto;
  width: ${props => props.width}
`