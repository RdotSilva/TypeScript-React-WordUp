import React, { createContext, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./utils/board";

// TODO: Fix this type, was having issues getting it to play nice with useState
export const AppContext = React.createContext<any>([]);

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
