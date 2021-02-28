import React, { useState } from "react";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import ProductCard from "./Components/ProductCard";
//Own hooks
import useLocalStorage from "./hooks/useLocalStorage";
//Components
import Form from "./Components/Form/Form";
import Button from "./Components/Button";

import { Product } from "./types";
function App() {
  const [products, setProducts] = useLocalStorage("products", [
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
    setProducts([...products, item]);
    toggleFormVisible();
  };

  const removeItem = (itemId: number): void => {
    const filteredProducts = products.filter(
      (product: Product) => product.id !== itemId
    );
    setProducts(filteredProducts);
  };

  const completeItem = (productId: number, isChecked: boolean) => {
    const foundIndex = products.findIndex(
      (item: Product) => item.id === productId
    );

    let arr = [
      ...products.slice(0, foundIndex),
      {
        ...products[foundIndex],
        completed: isChecked,
      },
      ...products.slice(foundIndex + 1),
    ];

    setProducts(arr);
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
        {products.length < 1 && (
          <MainTitle text="There is nothing here. Add new product" />
        )}
        {products.some((item: Product) => !item.completed) && (
          <section className="products__part">
            <MainTitle text="Products" />
            <ul className="products__list">
              {products
                .filter((item: Product) => !item.completed)
                .map((item: Product) => (
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

        {products.some((item: Product) => item.completed) && (
          <section className="products__part">
            <MainTitle text="Completed" />
            <ul className="products__list">
              {products
                .filter((item: Product) => item.completed)
                .map((item: Product) => (
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
