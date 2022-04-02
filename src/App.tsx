import React, { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./utils/board";

export const AppContext = createContext({});

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
