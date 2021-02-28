import React from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";

function App() {
  return (
    <div className="App">
      <main className="products">
        <section className="products__part">
          <MainTitle text="Products" />
          <ul className="products__list">
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
          </ul>
        </section>
        <section className="products__part">
          <MainTitle text="Completed" />
          <ul className="products__list">
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
            <li className="products__list-item">item</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
