import React from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";

function App() {
  return (
    <div className="App">
      <MainTitle text="Hello world" />
      <Title text="Hello world, but small" />
      <Subtitle text="Hello world, but subtitle" />
    </div>
  );
}

export default App;
