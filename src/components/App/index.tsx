import React, {useState} from 'react';
import Game from '../Game';
import Menu from '../Menu';
import {MenuItem} from '../../shared/menu-item';

const App: React.FC = () => {
  const [restartGame, setRestartGame] = useState(false);

  const menuItems: MenuItem[] = [
    {
      onClick: () => setRestartGame(!restartGame),
      text: 'Restart',
    },
  ];

  return (
    <>
      <Menu items={menuItems} />
      <Game restartGame={restartGame} />
    </>
  );
};

export default App;
