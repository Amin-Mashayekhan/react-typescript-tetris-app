import { StyledTetris, StyledTetrisWrapper } from "./App.styles";

import Display from './components/Display/Display';
import React from "react";
import Stage from './components/Stage/Stage';
import StartButton from './components/StartButton/StartButton';
import {createStage} from './gameHelpers';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);
  return (
    <StyledTetrisWrapper>
      <StyledTetris>  
      <div className="display">
        {gameOver ? (
          <>
            <Display gameOver={gameOver} text="Game Over!" />
            <StartButton callback={() => null} />
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
      <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;