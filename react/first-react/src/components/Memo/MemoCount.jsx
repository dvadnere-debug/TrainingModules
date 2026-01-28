import React, { useRef } from "react";

function Counts() {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <>
      <p>Nothing changed here but now Ive rendered</p>
      <span>{renderCount.current++}</span>
    </>
  );
}
export default React.memo(Counts);
