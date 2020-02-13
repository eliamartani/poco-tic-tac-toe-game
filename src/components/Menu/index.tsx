import React from 'react';
import * as S from './styled';
import {MenuProps} from './props';
import {MenuItem} from '../../shared/menu-item';

const Menu: React.FC<MenuProps> = (props: MenuProps) => (
  <S.Box>
    {props.items.map((item: MenuItem, index: number) => (
      <S.Button onClick={item.onClick} key={`menu_${index}`}>
        {item.text}
      </S.Button>
    ))}
  </S.Box>
);
export default Menu;
