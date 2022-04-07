import React from "react";

type Props = {
  keyVal: string;
  bigKey?: boolean;
};

const Key = ({ keyVal, bigKey }: Props) => {
  const styles = {
    width: bigKey ? "65.4px" : "40px",
    height: "58px",
  };

  return (
    <div
      style={styles}
      className={`flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none border-solid border-2`}
    >
      {keyVal}
    </div>
  );
};

export default Key;
