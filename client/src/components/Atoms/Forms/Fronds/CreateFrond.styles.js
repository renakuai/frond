import styled, { css } from 'styled-components';
import { Spacing } from '../../Spacing/Spacing.styles.js';
import { Colors } from '../../Colors/Colors';


export const QuestionDiv = styled.div`
  height: 500px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${Colors.grey[10]};
  padding: ${Spacing[1]};
  margin-top: ${Spacing[0.5]};
  margin-bottom: ${Spacing[0.5]};
`