import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDesc: { type: String },
  fullDesc: { type: String },
  price: { type: Number },
  imageUrl: { type: String },
  rating: { type: Number },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
