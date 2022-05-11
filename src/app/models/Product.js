import mongoose from "mongoose";

const productSchema = mongoose.Schema ({
  id: {type: String},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
})

export const products = mongoose.model('products', productSchema);