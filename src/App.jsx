import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";
import { FoodList, FavoriteFood } from "./Food";

// This is the main container component that brings together other components*/

function List(props) {
  if (!props.animals) {
    return <div>oading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>No animals found</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  // return (
  //   <div>
  //     <Greeting />
  //     <FavoriteFood />
  //   </div>
  // );

  const animals = [];
  return (
    <div>
      <h1>Animals:</h1>
      <List animals={animals} />
    </div>
  );
}

export default App;
