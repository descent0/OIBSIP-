import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaById, updatePizza } from "../actions/pizzaActions";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import Success from "./../components/Success";

export default function Editpizza({ match }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const updatePizzasState = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = updatePizzasState;
  const updatedPizzasState = useSelector((state) => state.updatedPizzaReducer);
  const { updatedsuccess, updatederror, updatedloading } = updatedPizzasState;
  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setImage(pizza.image);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);
  function formHandler(e) {
    e.preventDefault();
    const updatedpizza = {
      _id: match.params.pizzaid,
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
    dispatch(updatePizza(updatedpizza));
  }

  return (
    <div>
      <div className="bs">
        <h1 className="text-left">Edit Pizza</h1>
        {loading && <Loader />}
        {error && <Error message="Something went wrong! Try again later..." />}
        {updatedsuccess && <Success message="Pizza update was successful!" />}
        {updatedloading && <Loader />}
        {updatederror && (
          <Error message="Something went wrong! Try again later..." />
        )}
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
            UPDATE PIZZA
          </button>
        </form>
      </div>
    </div>
  );
}
