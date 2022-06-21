import styled from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';

export const Error = styled.span`
  font-size: ${Sizes.small};
  margin-top: ${Spacing[0.5]};
  margin-bottom: ${Spacing[0.5]};
  color: ${Colors.red[30]};
  }}
`