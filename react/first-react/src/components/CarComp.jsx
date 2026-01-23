//updater function = A function passed as an arguement to setState() ususally. ex. setYear(year+1) Allows for safe updates based on the preovious state . Used with multiple state updates and asynchronous functions
// React uses the current state to calculate the next state. set functions do not trigger an update. react batches together state updates for performance reasons. next state becomes the current state after an update

import React, { useState } from "react";

export default function CarComp() {
  const [car, myCar] = useState({
    year: 2026,
    make: "Ford",
    model: "Mustang",
  });

  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleChangeYear(event) {
    // myCar({ ...car, year: event.target.value });
    myCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleChangeMake(event) {
    // myCar({ ...car, make: event.target.value });
    myCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleChangeModel(event) {
    myCar((c) => ({ ...c, model: event.target.value }));
  }

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    // setFoods([...foods, newFood])

    if (newFood !== null) {
      setFoods((f) => [...f, newFood]);
    }
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>

        <button onClick={handleAddFood}>Add Food</button>
      </div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}{" "}
      </p>
      <input type="number" value={car.year} onChange={handleChangeYear}></input>
      <br />
      <input type="text" value={car.make} onChange={handleChangeMake}></input>
      <br />
      <input type="text" value={car.model} onChange={handleChangeModel}></input>
      <br />
    </>
  );
}
