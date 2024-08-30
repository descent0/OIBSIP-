import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./../actions/userActions";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { currentUser } = userState;
  const { users } = usersState;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded" style={{backgroundColor:"#fbc046"}}>
        <a className="navbar-brand" href="/">
          <img src="image-removebg-preview.png" style={{height:"70px"}} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown" style={{fontSize:"20px", fontWeight:"bold",color:"#a70d16"}}>
                <a
                  className="btn  dropdown-toggle text-light"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{fontSize:"20px", fontWeight:"bold",backgroundColor:"#a70d16"}}                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    My Orders
                  </a>

                  <a
                    className="dropdown-item"
                    href="/#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login" style={{fontSize:"20px", fontWeight:"bold",color:"#a70d16"}}>
                  Login
                </a>
              </li>
            )}
            <li className="nav-item" style={{fontSize:"20px", fontWeight:"bold",color:"#a70d16"}}>
              <a className="nav-link" href="/cart" style={{fontSize:"20px", fontWeight:"bold",color:"#a70d16"}}>
                <i className="fa fa-shopping-cart"></i>{" "}
                {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
