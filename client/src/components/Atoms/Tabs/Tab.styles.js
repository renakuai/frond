import styled, { css } from 'styled-components';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { Colors } from '../Colors/Colors.js';
import { Link } from "react-router-dom"
import { Weights } from '../Font/Weights.js';

export const TabElem = styled(Link)`
color: ${Colors.grey[60]};
height: 80%;
padding: ${Spacing[0.5]} 0 ${Spacing[0.5]} 0;
text-decoration: none;
  &.active {
    text-decoration: none;
    background-color: none;
    color: ${Colors.jade[40]};
    border-bottom: 3px solid ${Colors.jade[40]};
  };
  font-weight: ${Weights.regular};
  &:hover {
    color: ${Colors.jade[40]};
  };
`