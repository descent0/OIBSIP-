import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllUsers, deleteUser } from "../actions/userActions";

export default function Orderslist() {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { users, error, loading } = usersState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {error && <Error message="Something went wrong!" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Admin?</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.isAdmin ? <p>Yes</p> : <p>No</p>}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      className="fa fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
