import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* {console.log(<h1>Hello World</h1>)} */}
  </>,
);
