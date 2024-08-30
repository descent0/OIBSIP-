import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    const response = await axios.get("/api/orders/getuserorders", {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });
  try {
    const response = await axios.get("/api/users/getallusers");
    console.log(response);
    dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALLUSERS_FAILED", payload: error });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userid });
    alert("This user has been deleted successfully");
    window.location.reload();
  } catch (error) {
    alert("Action failed to complete!");
    console.log(error);
  }
};
