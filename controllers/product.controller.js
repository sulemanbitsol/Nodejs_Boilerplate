const Product = require("../models/product.model");
const User = require("../models/user.model");

const getAllProducts = async (req, res) => {
  console.log("Inside get All products api");
  const products = await Product.find({ isDeleted: false });
  res.send({
    products,
    message: "All products fetched successfully",
  })
}

const getProductById = async (req, res) => {
  console.log("Inside get Product by Id api");
  const product = await Product.findById(req.params.id).populate("owner");
  res.send({
    product,
    message: "Product fetched successfully",
  });
}

const addProduct = async (req, res) => {
  console.log("Inside add Product api");
  const { id } = req.user;
  const product = await Product.create({ ...req.body, owner: id });
  const owner = await User.findById({ _id: id });
  owner.products.push(product._id);
  owner.save();
  res.send({
    product,
    message: "Product created successfully",
  })
}

const updateProduct = async (req, res) => {
  console.log("Inside update Product api");
  const updatedProduct = await Product.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true });
  res.send({
    product: updatedProduct,
    message: "Product updated successfully",
  })
}

const deleteProduct = async (req, res) => {
  console.log("Inside delete Product api");
  await Product.findByIdAndUpdate({ _id: req.params.id }, { isDeleted: true }, { new: true });
  res.send({
    message: "Product deleted successfully",
  })
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
}