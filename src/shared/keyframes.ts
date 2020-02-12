import {keyframes} from 'styled-components';

export const openUpKeyframe = keyframes`
0% {
  max-width: 0;
  opacity: 0;
  visibility: hidden;
}
50% {
  max-width: 0;
}
100% {
  max-width: 25rem;
  opacity: 1;
  visibility: visible;
}
`;

export const fadeInKeyframe = keyframes`
0%, 50% {
  opacity: 0;
  visibility: hidden;
}
100% {
  opacity: 1;
  visibility: visible;
}
`;
