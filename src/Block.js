import React from "react";

const Block = (props) => {
  const { outerIndex, innerIndex } = props;
  let temp =
    (outerIndex % 2 === 0 && innerIndex % 2 !== 0) ||
    (outerIndex % 2 !== 0 && innerIndex % 2 === 0);
  return (
    <div className={temp ? "block black" : "block white"}></div>
    // <div className="block"></div>
  );
};

export default Block;
