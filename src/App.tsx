import { StyledTetris, StyledTetrisWrapper } from "./App.styles";

import React from "react";

const App: React.FC = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>Start here!</StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;