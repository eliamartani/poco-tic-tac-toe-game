import {Square} from '../../shared/square';

export interface SquareButton {
  odd: boolean;
}

export interface SquareProps extends SquareButton {
  label: string;
  onClick: () => void;
  value: Square;
}
