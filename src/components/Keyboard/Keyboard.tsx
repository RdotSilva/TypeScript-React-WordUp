import React from "react";

type Props = {};

const Keyboard = (props: Props) => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="flex justify-center">
      <div className="grid grid-rows-3 gap-2 w-30">
        <div className="grid grid-cols-10 gap-1">
          {keys1.map((key) => {
            return <div>{key}</div>;
          })}
        </div>
        <div className="grid grid-cols-9 gap-1">
          {keys2.map((key) => {
            return <div>{key}</div>;
          })}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {keys3.map((key) => {
            return <div>{key}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
