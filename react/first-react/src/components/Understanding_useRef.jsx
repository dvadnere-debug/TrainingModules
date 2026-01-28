import { useState, useEffect, useRef } from "react";

export default function Understanding_useRef() {
  //   let [count, setCount] = useState(0);

  // const handleclick = () => {
  //     setCount(count+1)
  // }
  const ref = useRef(0); //useRef returns an object that has one property of current.here current property is set to 0.

  useEffect(() => {
    console.log("this component is rendered");
  });

  function handleClick() {
    //
    ref.current++;
    console.log(ref.current);
  }
  return <button onClick={handleClick}>Click</button>;
}
