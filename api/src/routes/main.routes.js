const express = require("express");
const router = express.Router();

const Pizzaria = require("../models/pizzaria");
const Product = require("../models/product");

const createSplitTransaction =
  require("../services/pagarme").createSplitTransaction;

router.get("/pizzarias", async (req, res) => {
  try {
    const pizzarias = await Pizzaria.find();

    res.json({ error: false, pizzarias });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get("/pizzarias/:id", async (req, res) => {
  try {
    const pizzaria = await Pizzaria.findById(req.params.id);

    let products = await Product.find({
      pizzaria_id: pizzaria._id,
    }).populate("pizzaria_id", "recipient_id");

    res.json({ error: false, pizzaria: { ...pizzaria._doc, products } });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post("/purchase", async (req, res) => {
  try {
    const transaction = await createSplitTransaction(req.body);
    res.json(transaction);
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
