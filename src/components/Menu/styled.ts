import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 1;
`;

export const Button = styled.button`
  background: #eee299;
  border: 0;
  color: #fff;
  font-size: 1.2rem;
  padding: 5px 15px;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: #dcd18a;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 10px 20px;
  }
`;
