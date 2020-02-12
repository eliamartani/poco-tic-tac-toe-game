import React from 'react';
import * as S from './styled';

interface SquareProps {
  onClick: () => void;
  isX: boolean;
  value: string;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => (
  <S.Button isX={props.isX} onClick={props.onClick}>
    {props.value}
  </S.Button>
);
export default Square;
