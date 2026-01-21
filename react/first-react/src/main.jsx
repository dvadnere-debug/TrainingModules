import { createRoot } from "react-dom/client";
import MyApp from "./App.jsx";
import Car from "./App.jsx";
import ShoppingList from "./App.jsx";
import Greet from "./App.jsx";
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <MyApp />
    <Car />
    <ShoppingList /> */}
    <Greet />
  </>,
);
