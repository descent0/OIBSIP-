import React from "react";
import InputSpinner from "react-bootstrap-input-spinner";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./../actions/cartActions";
import Checkout from "./../components/Checkout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cartscreen() {
  AOS.init({
    duration: 1000,
  });
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  let subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center p-2" data-aos="fade-down">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name}[{item.varient}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <div className="spinner w-50">
                    <InputSpinner
                      type={"real"}
                      precision={2}
                      max={10}
                      min={1}
                      step={1}
                      value={item.quantity}
                      onChange={(num) => {
                        dispatch(
                          addToCart(item, (item.quantity = num), item.varient)
                        );
                      }}
                      variant={"danger"}
                      size="sm"
                    />
                  </div>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img src={item.image} alt="" style={{ height: "80px" }} />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash-alt"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4">
          <h2 style={{ fontSize: "45px" }}>Subtotal: ${subTotal}</h2>
          <Checkout />
        </div>
      </div>
    </div>
  );
}
