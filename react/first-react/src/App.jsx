import "./App.css";

// const user = {
//   name: "Hedy Gosling",
// };
// const products = [
//   { title: "Cabbage", id: 1, isFruit: false },
//   { title: "Garlic", id: 2, isFruit: false },
//   { title: "Apple", id: 3, isFruit: false },
// ];
// const listItems = products.map((product) => (
//   <li key={product.id}>{product.title}</li>
// ));

// export default function ShoppingList() {
//   const shoppingItems = products.map((product) => (
//     <li key={product.id}>
//       {product.title},is it Fruit {product.isFruit ? "Yes" : "No"}
//       {products.isFruit}{" "}
//     </li>
//   ));
//   console.log(typeof shoppingItems);
//   return <>{ShoppingList}</>;
// }
// export function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//     </div>
//   );
// }
// export default function Car() {
//   return (
//     <>
//       <h2>Hi!, I am {user.name}'s car .</h2>

//       <ul>{listItems}</ul>
//     </>
//   );
// }
const Book = (props) => {
  return (
    <div>
      <h1> BookName : {props.bookName}</h1>
      <h2> Author : {props.author}</h2>
    </div>
  );
};

const BookList = () => {
  return (
    <div>
      <Book bookName="Project hail mary" author="andy weir" />

      <Book bookName="storm and silence" author="rober thier" />
    </div>
  );
};

export default function Greet() {
  return (
    <>
      <h1>Hello World!</h1>
      <Book />
      <BookList />
    </>
  );
}
