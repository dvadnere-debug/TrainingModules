import { Counts } from "./MemoCount";
import { useState } from "react";

export default function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <button onClick={() => setCount((n) => n + 1)}>Click</button>
      <Counts />
    </>
  );
}
