import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";

// This is the main container component that brings together other components*/

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>;
      <Greeting />
    </div>
  );
}

export default App;
