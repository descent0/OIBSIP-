import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Filter from "../components/Filter";
import Error from "../components/Error";
import { getAllPizzas } from "../actions/pizzaActions";
import { Pizza } from "../components/Pizza";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>

      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={"Something went wrong! Try again later..."} />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
