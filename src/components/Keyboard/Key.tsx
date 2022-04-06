import React from "react";

type Props = {
  keyVal: string;
  bigKey?: boolean;
};

const Key = ({ keyVal, bigKey }: Props) => {
  return <div className={bigKey ? "w-10" : ""}>{keyVal}</div>;
};

export default Key;
