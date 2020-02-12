import React from 'react';
import * as S from './styled';

interface MenuProps {
  onClickRestart: () => void;
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <S.Box>
      <S.Button onClick={props.onClickRestart}>Restart</S.Button>
    </S.Box>
  );
};
export default Menu;
