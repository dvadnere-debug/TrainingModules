export default function List() {
  //   const fruits = ["Apple", "pineApple", "Grapes", "coconut"];

  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 55 },
    { id: 3, name: "banana", calories: 120 },
    { id: 4, name: "coconut", calories: 150 },
    { id: 5, name: "pineapple", calories: 140 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 95 },
    { id: 2, name: "tomatoes", calories: 55 },
    { id: 3, name: "carrots", calories: 120 },
    { id: 4, name: "corns", calories: 150 },
    { id: 5, name: "broc", calories: 140 },
  ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => a.calories - b.calories);

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}
      <b>{fruit.calories}</b>
    </li>
  ));

  const veggies = vegetables.map((vegetable) => (
    <li key={vegetable.id}>
      {vegetable.name}
      <b>{vegetable.calories}</b>
    </li>
  ));

  return (
    <>
      <h1>Fruits</h1>
      <ol>{listItems}</ol>

      <h1>Vegetables</h1>
      <ol>{veggies}</ol>
    </>
  );
}
