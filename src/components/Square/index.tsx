import React from 'react';
import * as S from './styled';
import {SquareProps} from './props';

const Square: React.FC<SquareProps> = (props: SquareProps) => (
  <S.Button aria-label={props.label} odd={props.odd} onClick={props.onClick}>
    {props.value}
  </S.Button>
);
export default Square;
