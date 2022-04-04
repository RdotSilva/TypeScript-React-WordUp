import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  letterPos: number;
  attemptVal: number;
};

const Letter = ({ letterPos, attemptVal }: Props) => {
  const { board, setBoard } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  return (
    <div className="border-solid border-2 border-sky-500 col-span-1">
      <p className="text-5xl">{letter}</p>
    </div>
  );
};

export default Letter;
