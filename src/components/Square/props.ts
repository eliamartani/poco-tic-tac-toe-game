import {Square} from '../../shared/square';

export interface SquareButton {
  odd: boolean;
}

export interface SquareProps extends SquareButton {
  onClick: () => void;
  value: Square;
}
