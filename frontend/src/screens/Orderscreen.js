import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loader from "./../components/Loader";
import Error from "./../components/Error";

export default function Orderscreen() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h1>My Orders</h1>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loader />}
        {error && <Error message="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8 m-2 p-1"
                style={{ backgroundColor: "red", color: "wheat" }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <h1>
                            {item.name}[{item.varient}] *{item.quantity}=
                            {item.quantity}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Address</h2>
                    <hr />
                    <p>Street: {order.shippingAddress.street}</p>
                    <p>City: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                    <p>Zip: {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                    <hr />
                    <p>Order Amount: {order.orderAmount}</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction ID: {order.transactionId}</p>
                    <p>Order ID: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
