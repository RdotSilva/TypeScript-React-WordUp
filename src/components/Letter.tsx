import React, { useContext } from "react";
import { AppContext } from "../App";

type Props = {
  letterPos: string;
  attemptVal: string;
};

const Letter = ({ letterPos, attemptVal }: Props) => {
  const { board, setBoard } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  return <div>{letter}</div>;
};

export default Letter;
