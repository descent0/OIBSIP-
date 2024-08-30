const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/all", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newpizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      description: pizza.description,
      variant: ["small", "medium", "large"],
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newpizza.save();
    res.send("New pizza added successfully!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});
router.post("/getpizzabyid", async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    const pizza = await Pizza.findOne({ _id: pizzaid });
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
router.post("/updatepizza", async (req, res) => {
  const updatedpizza = req.body.updatedpizza;
  try {
    const pizza = await Pizza.findOne({ _id: updatedpizza._id });
    (pizza.name = updatedpizza.name),
      (pizza.description = updatedpizza.description),
      (pizza.image = updatedpizza.image),
      (pizza.category = updatedpizza.category),
      (pizza.prices = [updatedpizza.prices]);
    await pizza.save();
    res.send("Pizza details updated successfully!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    await Pizza.findOneAndDelete({ _id: pizzaid });
    res.send("Pizza deleted successfully!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
