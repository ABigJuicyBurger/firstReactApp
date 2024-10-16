import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Im new to react; add a hello world

const root = createRoot(document.getElementById("root"));
root.render(<App />);
