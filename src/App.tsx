import React, { useState } from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import ProductCard from "./Components/ProductCard";

import { Product } from "./types";

function App() {
  const [items, setItems] = useState<Array<Product>>([
    {
      id: Math.random(),
      name: "First product",
      description: "description",
      priority: 1,
      dateCreated: new Date(),
      completed: false,
    },
  ]);

  const cardTest = (id: number): void => {
    console.log(id);
  };

  return (
    <div className="App">
      <main className="products">
        <section className="products__part">
          <MainTitle text="Products" />
          <ul className="products__list">
            {items
              .filter((item) => !item.completed)
              .map((item) => (
                <li key={item.id} className="products__list-item">
                  <ProductCard
                    className="test"
                    id={item.id}
                    title={item.name}
                    description={item.description}
                    onCheck={cardTest}
                    onDelete={cardTest}
                  />
                </li>
              ))}
          </ul>
        </section>
        <section className="products__part">
          <MainTitle text="Completed" />
          <ul className="products__list">
            {items
              .filter((item) => item.completed)
              .map((item) => (
                <li key={item.id} className="products__list-item">
                  <ProductCard
                    id={item.id}
                    title={item.name}
                    description={item.description}
                    onCheck={cardTest}
                    onDelete={cardTest}
                  />
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
