import React, {useState} from 'react';
import Game from '../Game';
import Menu from '../Menu';

const App: React.FC = () => {
  const [restartGame, setRestartGame] = useState(false);

  const handleClickRestart = () => {
    setRestartGame(!restartGame);
  };

  return (
    <div className="App">
      <Menu onClickRestart={handleClickRestart} />
      <Game restartGame={restartGame} />
    </div>
  );
};

export default App;
