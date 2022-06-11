import styled from 'styled-components';
import { Sizes } from '../../Font/Sizes.styles.js';
import { Weights } from '../../Font/Weights.js';
import { Colors } from '../../Colors/Colors.js';
import { Spacing } from '../../Spacing/Spacing.styles.js';


export const Banner = styled.div`
  font-size: ${Sizes.default};
  font-weight: ${Weights.semibold};
  background-color: ${props => {
    switch (props.type) {
      case ('success'):
        return Colors.cyan[10]
      case ('error'):
        return Colors.red[10]
      case ('informational'):
        return Colors.lightBlue[10]
      case ('warning'):
        return Colors.orange[10]
    }
  }};
  color: ${props => {
    switch (props.type) {
      case ('success'):
        return Colors.green[40]
      case ('error'):
        return Colors.red[40]
      case ('informational'):
        return Colors.blue[40]
      case ('warning'):
        return Colors.orange[40]
    }
  }};
  padding: ${Spacing[1]} ${Spacing[1.5]} ${Spacing[1]} ${Spacing[1.5]};
  border-radius: 4px;
  width: ${props => props.width};
  margin-left: auto;
  margin-right: auto;
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => {
    if (props.close) return 'space-between';
    else return
  }}
  ;
  text-align: left;
  align-items: center;
`


export const Svg = styled.svg`
  cursor: pointer;
`