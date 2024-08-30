import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Registrationscreen from "./screens/Registrationscreen";
import Loginscreen from "./screens/Loginscreen";
import Orderscreen from "./screens/Orderscreen";
import Adminscreen from "./screens/Adminscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registrationscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/orders" exact component={Orderscreen} />
        <Route path="/admin" component={Adminscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
