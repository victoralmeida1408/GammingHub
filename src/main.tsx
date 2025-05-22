import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./login";
import SearchBar from "./search";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> 
    <CardGame /> */}
    {/* <Navbar /> */}
    <Login />
    {/* <SearchBar /> */}
  </StrictMode>
);
