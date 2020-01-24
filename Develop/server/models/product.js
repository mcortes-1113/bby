const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  sku: String,
  image: String,
  name: String,
  price: Number,
  quantity: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
