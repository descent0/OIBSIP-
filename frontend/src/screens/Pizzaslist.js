import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas, deletePizza } from "./../actions/pizzaActions";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { Link } from "react-router-dom";

export default function Pizzaslist() {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Pizza's List</h1>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Categories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <tr>
                  <td>{pizza.name}</td>
                  <td>
                    Small: {pizza.prices[0]["small"]} <br />
                    Medium: {pizza.prices[0]["medium"]} <br />
                    Large: {pizza.prices[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <i
                      className="fa fa-trash-alt m-1"
                      onClick={() => {
                        dispatch(deletePizza(pizza._id));
                      }}
                    ></i>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
