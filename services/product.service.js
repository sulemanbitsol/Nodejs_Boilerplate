const Product = require("../models/product.model")

export const getProducts = () => {
  return Product.find({})
}