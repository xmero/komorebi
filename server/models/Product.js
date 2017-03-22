const mongoose = require('mongoose')
var Schema = mongoose.Schema
const collection = 'products'
var User = mongoose.model('User');

const ProductSchema = new Schema({
  name: { type: String },
  location: { type: String },
  postalCode: { type: String },
  username: { type: String },
  image: { type: String, default: "https://www.maciverse.com/wp-content/themes/maciversev2/images/default-thumb.png" },
  description: { type: String },
  free: { type: String, enum: ['free', 'reserved', 'given'], default: 'free' },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
  owner: {type: Schema.ObjectId, ref: "User"}
}, { collection })

module.exports = mongoose.model('Product', ProductSchema);