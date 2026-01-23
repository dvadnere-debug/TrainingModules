import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");

  let [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("SpongBob");
  };

  const updateAge = () => {
    setAge(age++);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>
  );
}
