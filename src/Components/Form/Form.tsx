import React, { useState } from "react";

import styled from "styled-components";

//Components
import Title from "../Title";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import NumberInput from "./NumberInput";
import Button from "../Button";

import { Product } from "../../types";

export type FormProps = {
  onSubmit: (product: Product) => void;
  onCancel: (
    event:
      | React.ChangeEvent<HTMLButtonElement>
      | React.FormEvent<HTMLButtonElement>
  ) => void;
  title: string;
  defaultValue?: Product;
  // Custom styles
  className?: string;
};

const Form: React.FC<FormProps> = ({
  title,
  onSubmit,
  onCancel,
  defaultValue,
  className,
}) => {
  const [name, setName] = useState<string>(
    defaultValue ? defaultValue.name : ""
  );
  const [description, setDescription] = useState<string>(
    defaultValue ? defaultValue.description : ""
  );
  const [priority, setPriority] = useState<number>(
    defaultValue ? defaultValue.priority : 1
  );

  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const product: Product = {
      id: Math.random(),
      name: name,
      description: description,
      priority: priority,
      dateCreated: new Date(),
      completed: false,
    };

    onSubmit(product);
  };

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const updatePriority = (value: number) => {
    setPriority(value);
  };

  return (
    <div className={className}>
      <Title text={title} className={"title"} />
      <form className="form">
        <div className="form__inputs-wrapper">
          <TextInput
            name="name"
            title="Product name"
            onChange={updateName}
            value={name}
          />
          <Textarea
            name="description"
            title="Description"
            onChange={updateDescription}
            value={description}
          />
          <NumberInput
            name="priority"
            title="Priority (1-5)"
            onChange={updatePriority}
            defaultValue={priority.toString()}
          />
        </div>
        <Button
          onClick={submitForm}
          text="Add"
          disabled={!name}
          big
          rounded
          className="button"
        />
      </form>
      <Button
        onClick={onCancel}
        text="Cancel"
        big
        rounded
        transparent
        className="button"
      />
    </div>
  );
};

const FormStyled = styled(Form)`
  padding: 120px 15px;

  width: 100%;
  min-height: 100vh;

  position: absolute;
  top: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);

  .title {
    margin-bottom: 16px;
  }

  .form {
    display: grid;
    grid-gap: 70px;

    margin-bottom: 25px;

    &__inputs-wrapper {
      display: grid;
      grid-gap: 25px;
    }
  }
`;

export default FormStyled;
