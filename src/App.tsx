import React, { useState, useEffect } from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import ProductCard from "./Components/ProductCard";

import Form from "./Components/Form/Form";

import Button from "./Components/Button";

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

  const [isFormVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisible = () => {
    setFormVisible(!isFormVisible);
  };

  const addItem = (item: Product) => {
    setItems([...items, item]);
    toggleFormVisible();
  };

  const removeItem = (itemId: number): void => {
    const filteredProducts = items.filter((product) => product.id !== itemId);
    setItems(filteredProducts);
  };

  const completeItem = (productId: number, isChecked: boolean) => {
    const foundIndex = items.findIndex((item) => item.id === productId);

    let arr = [
      ...items.slice(0, foundIndex),
      {
        ...items[foundIndex],
        completed: isChecked,
      },
      ...items.slice(foundIndex + 1),
    ];

    setItems(arr);
  };

  return (
    <div className="App">
      {isFormVisible && (
        <Form
          onCancel={toggleFormVisible}
          onSubmit={addItem}
          title="Add new product"
        />
      )}
      <main className="products">
        {items.length < 1 && (
          <MainTitle text="There is nothing here. Add new product" />
        )}
        {items.some((item) => !item.completed) && (
          <section className="products__part">
            <MainTitle text="Products" />
            <ul className="products__list">
              {items
                .filter((item) => !item.completed)
                .map((item) => (
                  <li key={item.id} className="products__list-item">
                    <ProductCard
                      id={item.id}
                      title={item.name}
                      description={item.description}
                      completed={item.completed}
                      onCheck={completeItem}
                      onDelete={removeItem}
                    />
                  </li>
                ))}
            </ul>
          </section>
        )}

        {items.some((item) => item.completed) && (
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
                      completed={item.completed}
                      onCheck={completeItem}
                      onDelete={removeItem}
                    />
                  </li>
                ))}
            </ul>
          </section>
        )}
      </main>
      <Button text="Add new product" onClick={toggleFormVisible} big rounded />
    </div>
  );
}
export default App;
