import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/all");
    console.log(response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/getpizzabyid", { pizzaid });
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: error });
  }
};
export const filterPizzas = (searchkey, category) => async (dispatch) => {
  var filteredPizzas;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/all");
    filteredPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filteredPizzas = response.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: " ADD_PIZZA_REQUEST" });
  try {
    await axios.post("/api/pizzas/addpizza", { pizza });
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
    window.location.href = "/admin/pizzaslist";
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};
export const updatePizza = (updatedpizza) => async (dispatch) => {
  dispatch({ type: " UPDATE_PIZZA_REQUEST" });
  try {
    await axios.post("/api/pizzas/updatepizza", {
      updatedpizza,
    });
    dispatch({ type: "UPDATE_PIZZA_SUCCESS" });
    window.location.href = "/admin/pizzaslist";
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZA_FAILED", payload: error });
  }
};
export const deletePizza = (pizzaid) => async (dispatch) => {
  try {
    await axios.post("/api/pizzas/deletepizza", { pizzaid });
    alert("Pizza deleted successfully");
    window.location.reload();
  } catch (error) {
    alert("Action failed to complete!");
    console.log(error);
  }
};
