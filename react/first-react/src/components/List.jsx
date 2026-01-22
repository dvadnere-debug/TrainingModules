export default function List() {
  //   const fruits = ["Apple", "pineApple", "Grapes", "coconut"];

  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 55 },
    { name: "banana", calories: 120 },
    { name: "coconut", calories: 150 },
    { name: "pineapple", calories: 140 },
  ];

  const listItems = fruits.map((fruit) => (
    <li key={fruit.name}>{fruit.name}</li>
  ));

  return <ol>{listItems}</ol>;
}
