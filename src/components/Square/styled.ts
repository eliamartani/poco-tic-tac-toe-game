import styled from 'styled-components';
import {SquareButton} from './props';

export const Button = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  color: #${(props: SquareButton) => (props.odd ? 'ff8360' : '3cdbd3')};
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 4rem;
  font-weight: bold;
  height: 6rem;
  line-height: 1;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  transition: background 0.2s;
  vertical-align: top;
  width: 6rem;

  &:hover {
    background: #f0f0f0;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
    height: 10rem;
    width: 10rem;
  }
`;
