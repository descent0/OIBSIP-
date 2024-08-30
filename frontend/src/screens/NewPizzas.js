import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import Success from "./../components/Success";

export default function NewPizzas() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const addPizzasState = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addPizzasState;

  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
  }
  return (
    <div>
      <div className="text-left bs">
        <h1>Add New Pizza</h1>
        {loading && <Loader />}
        {error && <Error message="Something went wrong! Try again later..." />}
        {success && <Success message="Pizza added successfully" />}
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="small variant price"
            className="form-control"
            value={smallPrice}
            onChange={(e) => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="medium variant price"
            className="form-control"
            value={mediumPrice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="large variant price"
            className="form-control"
            value={largePrice}
            onChange={(e) => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="image"
            className="form-control"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="description"
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="category"
            className="form-control"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <button className="btn btn-danger float-left ml-1" type="submit">
            ADD PIZZA
          </button>
        </form>
      </div>
    </div>
  );
}
