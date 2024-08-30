import React, { useState, useEffect } from "react";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <div className="bs">
            <h1 className="text-center">Login</h1>
            {loading && <Loader />}
            {error && <Error message="Invalid credentials" />}
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-dark mt-3" onClick={login}>
              Login
            </button>
            <br />
            <a href="/register">Click here to register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
