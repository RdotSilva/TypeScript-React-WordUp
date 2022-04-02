import React, { useState } from "react";
import { boardDefault } from "../utils/board";

type Props = {};

const Board = (props: Props) => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div>
      <div>Row 1</div>
      <div>Row 2</div>
      <div>Row 3</div>
      <div>Row 4</div>
      <div>Row 5</div>
      <div>Row 6</div>
    </div>
  );
};

export default Board;
