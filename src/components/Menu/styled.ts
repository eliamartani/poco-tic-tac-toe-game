import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 1;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid #6f6a47;
  color: #6f6a47;
  font-size: 1.2rem;
  padding: 5px 15px;
  text-transform: uppercase;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: #9c9668;
    color: #9c9668;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 10px 20px;
  }
`;
