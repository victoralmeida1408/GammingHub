import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./login";
import SearchBar from "./search";
/*import CardGame from "./Cardgame";*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App />  */}
    {/* <Navbar /> */}
    { <Login /> }
    {/* <SearchBar /> */}

  </StrictMode>
);
