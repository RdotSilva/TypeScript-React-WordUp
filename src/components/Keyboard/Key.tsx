import React from "react";

type Props = {
  keyVal: string;
  bigKey?: boolean;
};

const styles = {
  width: `40px`,
  height: "58px",
};

const Key = ({ keyVal, bigKey }: Props) => {
  return (
    <div
      style={styles}
      className={`flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none`}
    >
      {keyVal}
    </div>
  );
};

export default Key;
