import styled from 'styled-components';
import {openUpKeyframe, fadeInKeyframe} from '../../shared/keyframes';

interface GameInfoProps {
  displayModal: boolean;
}

export const Game = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem;
`;

export const GameInfo = styled.div`
  align-items: center;
  background: rgba(60, 219, 211, 0.3);
  bottom: 0;
  display: ${(props: GameInfoProps) => (props.displayModal ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  left: 0;
  padding: 0 1rem;
  position: absolute;
  right: 0;
  top: 0;
`;

export const GameInfoContainer = styled.div`
  animation: ${openUpKeyframe} 0.6s linear 1;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  max-width: 25rem;
  overflow: hidden;
  padding: 2rem 1rem;
  position: relative;
  text-align: center;
  width: 100%;
`;

export const GameInfoText = styled.div`
  animation: ${fadeInKeyframe} 1s linear 1;
  color: #7dce82;
  line-height: 1;
  text-transform: uppercase;
`;

export const GameInfoLabel = styled(GameInfoText)`
  font-size: 2rem;
`;

export const GameInfoStatus = styled(GameInfoText)`
  font-size: 5rem;
  font-weight: bold;
`;
