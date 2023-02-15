const express = require("express");
const routes = express.Router();

const {authMiddleware} = require("../middlewares/auth.middleware");
const { getAllProducts, addProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/product.controller");

routes.get("", getAllProducts);
routes.get("/:id", authMiddleware, getProductById);
routes.post("/add", authMiddleware, addProduct);
routes.put("/:id", updateProduct);
routes.delete("/:id", deleteProduct)

module.exports = routes;