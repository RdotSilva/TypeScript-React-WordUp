import React from "react";

type Props = {};

const Keyboard = (props: Props) => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="">
      <div className="">
        {keys1.map((key) => {
          return <div>{key}</div>;
        })}
      </div>
      <div className="">
        {keys2.map((key) => {
          return <div>{key}</div>;
        })}
      </div>
      <div className="">
        {keys3.map((key) => {
          return <div>{key}</div>;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
