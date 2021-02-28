import React from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import Checkbox from "./Components/Checkbox";

function App() {
  const checkboxTest = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? console.log("checkbox checked")
      : console.log("checkbox unchecked");
  };

  return (
    <div className="App">
      <MainTitle text="Hello world" />
      <Title text="Hello world, but small" />
      <Subtitle text="Hello world, but subtitle" />
      <Checkbox text="Checkbox" name="test task" onCheck={checkboxTest} />
    </div>
  );
}

export default App;
