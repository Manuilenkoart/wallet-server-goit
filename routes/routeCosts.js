const express = require("express");
const app = express();
const controllerCosts = require("../controllers/controllerCosts");

app.get("/:id", async (req, res) => {
  const costs = await controllerCosts.getById(req.params.id);
  if (!costs) {
    return res.status(404).json({
      status: "no products"
    });
  }
  res.status(200).json({ status: "success", products: costs });
});

app.get("/", async (req, res) => {
  if (req.query.category) {
    const queryCategory = await controllerCosts.getQueryCategory(
      req.query.category
    );
    if (!queryCategory.length) {
      return res.status(404).json({
        status: "no products",
        product: queryCategory
      });
    }
    res.json({ status: "success", products: queryCategory });
  }

  const products = await controllerCosts.getAll();
  res.json({ status: "success", products: products });
});
module.exports = app;
