import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import Success from "./../components/Success";
import { registerUser } from "../actions/userActions";

function Registrationscreen() {
  const registerState = useSelector((state) => state.registerUserReducer);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const { loading, success, error } = registerState;

  const dispatch = useDispatch();
  function register() {
    // eslint-disable-next-line eqeqeq
    if (password == cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      dispatch(registerUser(user));
    } else {
      alert("passwords do not match!");
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {loading && <Loader />}
          {success && <Success message="Your registration was successful!" />}
          {error && <Error message="Email is already in use. Try later!" />}
          <div className="bs">
            <h1 className="text-center">Register</h1>
            <input
              type="text"
              required
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn btn-dark mt-3"
              onClick={register}
            >
              Register
            </button>{" "}
            <br />
            <a href="/login">Click here to login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrationscreen;
