const express = require("express");

const Pizza = require("./models/pizzaModel");

const app = express();
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const usersRoute = require("./routes/userRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", usersRoute);

const dbConfig = require("./.db");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is now running on port 5000 🔥"));
