import { BiLoaderAlt } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export const SpinnerMini = styled(BiLoaderAlt)`
  animation: ${rotate} 1.5s infinite linear;
`;
