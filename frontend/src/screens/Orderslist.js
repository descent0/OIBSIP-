import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { deliverOrder, getAllOrders } from "./../actions/orderActions";

export default function Orderslist() {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getAllOrdersReducer);
  const { orders, error, loading } = ordersState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {error && <Error message="Something went wrong!" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.idDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={deliverOrder(order._id)}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
