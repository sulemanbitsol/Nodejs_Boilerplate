const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  pieces: {
    type: Number,
    default: 1,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;