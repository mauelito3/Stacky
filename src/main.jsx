import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Stacky from "./Stacky.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Stacky />
  </StrictMode>
);
