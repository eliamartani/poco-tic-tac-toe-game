import React from 'react';
import Square from '../Square';
import * as S from './styled';
import {BoardProps} from './props';

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const renderSquare = (i: number) => {
    return (
      <Square
        odd={props.squares[i] === 'X'}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  return (
    <S.Box>
      <S.Row>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </S.Row>
      <S.Row>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </S.Row>
      <S.Row>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </S.Row>
    </S.Box>
  );
};
export default Board;
