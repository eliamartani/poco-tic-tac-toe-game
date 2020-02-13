import React, {useEffect, useState} from 'react';
import Board from '../Board';
import * as S from './styled';
import {History} from '../../shared/history';
import {Square} from '../../shared/square';
import {GameProps} from './props';

const Game: React.FC<GameProps> = (props: GameProps) => {
  const [history, setHistory] = useState<History[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory([
      ..._history,
      {
        squares: squares,
      },
    ]);
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };
  const calculateWinner = (squares: Square[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const displayModal = !!winner;

  useEffect(() => {
    setStepNumber(0);
    setXIsNext(true);
  }, [props.restartGame]);

  return (
    <S.Game>
      <Board
        squares={current.squares}
        onClick={(index: number) => handleClick(index)}
      />
      <S.GameInfo displayModal={displayModal}>
        <S.GameInfoContainer>
          <S.GameInfoLabel>Winner:</S.GameInfoLabel>
          <S.GameInfoStatus>{winner}</S.GameInfoStatus>
        </S.GameInfoContainer>
      </S.GameInfo>
    </S.Game>
  );
};
export default Game;
