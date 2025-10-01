// Importing React's StrictMode for highlighting potential problems in the app
import { StrictMode } from "react";

// Importing createRoot from react-dom/client (used in React 18+)
// This is the new way to render React apps instead of ReactDOM.render
import { createRoot } from "react-dom/client";

// Import global CSS styles for the app
import "./index.css";

// Import the main app component
import Stacky from "./Stacky.jsx";

// Get the root DOM element where the React app will be mounted
// In your HTML file, this is usually <div id="root"></div>
const rootElement = document.getElementById("root");

// Create a React root and render the app inside it
// Wrapping in <StrictMode> helps detect unsafe lifecycles, deprecated APIs, and other warnings
createRoot(rootElement).render(
  <StrictMode>
    <Stacky /> {/* Main app component */}
  </StrictMode>
);
