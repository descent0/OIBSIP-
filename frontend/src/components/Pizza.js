import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./../actions/cartActions";
import AOS from "aos";
import "aos/dist/aos.css";

export function Pizza({ pizza }) {
  AOS.init({
    duration: 1000,
  });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  function addtocart() {
    dispatch(addToCart(pizza, quantity, varient));
  }

  return (
    <div className="shadow p-3 mb-5 bg-white rounded" data-aos="zoom-in">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt=""
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            value={quantity}
            className="form-control"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100 mt-1">
          <h1>Price: $ {pizza.prices[0][varient] * quantity} </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn-danger" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            style={{ height: "400px" }}
            alt=""
            className="img-fluid"
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
