import React from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <MainTitle text="Hello world" />
      <Title text="Hello world, but small" />
    </div>
  );
}

export default App;
