import React from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle";
import Checkbox from "./Components/Checkbox";
import Button from "./Components/Button";
import TextArea from "./Components/Form/Textarea";

function App() {
  const checkboxTest = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.checked
      ? console.log("checkbox checked")
      : console.log("checkbox unchecked");
  };

  const buttonTest = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("click");
  };

  const textareaTest = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <MainTitle text="Hello world" />
      <Title text="Hello world, but small" />
      <Subtitle text="Hello world, but subtitle" />
      <Checkbox text="Checkbox" name="test task" onCheck={checkboxTest} />
      <Button
        text="Edit"
        ariaLabel="click"
        onClick={buttonTest}
        transparent
        danger
      />
      <Button text="Add" ariaLabel="click" onClick={buttonTest} big rounded />
      <TextArea
        onChange={textareaTest}
        name="description"
        title="Description"
      />
    </div>
  );
}

export default App;
