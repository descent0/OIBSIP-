import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import Userslist from "./Userslist";
import Pizzaslist from "./Pizzaslist";
import NewPizzas from "./NewPizzas";
import Orderslist from "./Orderslist";
import Editpizza from "./Editpizza";

export default function Adminscreen() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h1 style={{ fontSize: "20px" }}>Admin Panel</h1>
          <hr />
          <ul className="admin">
            <li>
              <Link to={"/admin/userslist"}>Users List</Link>
            </li>
            <li>
              <Link to="/admin/pizzaslist">Pizzas List</Link>
            </li>
            <li>
              <Link to="/admin/addnewpizza">Add New Pizza</Link>
            </li>
            <li>
              <Link to="/admin/orderslist">Orders List</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
            <Route path="/admin/addnewpizza" component={NewPizzas} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route
              path="/admin/editpizza/:pizzaid"
              component={Editpizza}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
