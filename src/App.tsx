import { StyledTetris, StyledTetrisWrapper } from "./App.styles";

import Display from './components/Display/Display';
import React from "react";
import Stage from './components/Stage/Stage';
import StartButton from './components/StartButton/StartButton';
import {createStage} from './gameHelpers';
import {useInterval} from './hooks/useInterval';
import {usePlayer} from './hooks/usePlayer';
import {useStage} from './hooks/useStage';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);

  const gameArea = React.useRef<HTMLDivElement>(null);

  const {player, updatePlayerPos, resetPlayer} = usePlayer();
  const {stage, setStage} = useStage(player, resetPlayer);
  const movePlayer = (dir: number) => {
    updatePlayerPos({x: dir, y: 0, collided: false});
  };

  const keyUp = ({keyCode}: {keyCode: number }): void => {
    //  Change the dropTime speed when user releases down arrow
    if(keyCode === 40) {
      setDropTime(1000);
      // setDropTime(1000 / level);
    }
  }

  const handleStartGame = (): void => {
    // Need to focus the window with the key events on start
    if (gameArea.current) gameArea.current.focus();
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
  }

  const move =  ({keyCode, repeat}: {keyCode: number, repeat: boolean}): void => {
    if (keyCode === 37) {
      // this is going to be be the left arrow on keyboard
      movePlayer(-1);
    } else if (keyCode === 39){ 
      // this is going to be be the right arrow on keyboard
      movePlayer(1);
    } else if (keyCode == 40) {
      // this is going to be be the down arrow on keyboard
      // Just call onces
      if (repeat) return;
      setDropTime(30);
    } else if (keyCode === 38) {
      // this is going to be be the up arrow on keyboard
      // Implement this later  
    }
  }

  const drop = (): void => {
    updatePlayerPos({x: 0, y: 1, collided: false});
  }

  useInterval(() => {
    drop();
  }, dropTime)
  
  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      <StyledTetris>  
      <div className="display">
        {gameOver ? (
          <>
            <Display gameOver={gameOver} text="Game Over!" />
            <StartButton callback={handleStartGame} />
          </>
        ) : (
          <>
            <Display text={`Score:`} />
            <Display text={`Rows:`} />
            <Display text={`Level:`} />
      
          </>
        )
      }
      </div>
      <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;