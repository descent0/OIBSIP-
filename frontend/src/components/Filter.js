import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div className="container" >
      <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            value={searchkey}
            type="search"
            className="form-control"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-veg</option>
          </select>
        </div>
        <div className="col-md-3">
          <button
            className="btn w-100 mt-1" style={{backgroundColor:"#a70d16",color:"white", fontWeight:"bold"}}
            onClick={() => dispatch(filterPizzas(searchkey, category))}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
