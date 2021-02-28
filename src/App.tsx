import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Block = styled.div`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Block>hello world</Block>
    </div>
  );
}

export default App;
