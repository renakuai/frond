import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;
  flex-direction: ${props => {
    switch (props.direction) {
      case ('horizontal'):
        return 'row'
      case ('vertical'):
        return 'column'
    }
  }};
  gap: 4px;
  width: inherit;
`