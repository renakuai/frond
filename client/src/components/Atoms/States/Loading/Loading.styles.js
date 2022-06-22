import styled, { css, keyframes } from 'styled-components';
import { Colors } from '../../Colors/Colors.js';

const shimmerAnimation = keyframes`
0% {
  background-position: -1400px 0;
}
100% {
  background-position: 1400px 0; 
}
`

export const Styles = css`
  border-radius: 4px;
  background-image: linear-gradient(90.07deg, rgba(255, 255, 255, 0) 0.04%, rgba(255, 255, 255, 0.70) 53.1%, rgba(255, 255, 255, 0) 99.92%);
  background-repeat: no-repeat;
  background-size:  1000px 104px; 
  position: relative; 
  -webkit-animation-duration: 1.5s;
  -webkit-animation-fill-mode: forwards; 
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${shimmerAnimation};
  -webkit-animation-timing-function: linear;
`

export const LoadingContainer = styled.div`
  margin-top: 3rem;
  display: flex; 
  flex-direction: column;
  gap: 1rem;
`

export const Div1 = styled.div`
background-color: ${Colors.grey[10]};
  width: 100%;
  height: 100px;
  ${Styles};
`

export const Div2 = styled.div`
background-color: ${Colors.grey[10]};
  width: 90%;
  height: 70px;
  ${Styles};
`

export const Div3 = styled.div`
background-color: ${Colors.grey[10]};
  width: 90%;
  height: 24px;
  ${Styles};
`
export const TableLoadingContainer = styled.div`
  margin-top: 3rem;
  display: flex; 
  flex-direction: column;
  gap: 0rem;
`

export const RowDiv = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 2px solid ${Colors.grey[10]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  ${Styles};
`

export const Block = styled.div`
  background-color: ${Colors.grey[10]};
  width: 20%;
  height: 20px;
  ${Styles};
`


