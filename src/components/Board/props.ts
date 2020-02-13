import {Square} from '../../shared/square';

export interface BoardProps {
  onClick: (index: number) => any;
  squares: Square[];
}
