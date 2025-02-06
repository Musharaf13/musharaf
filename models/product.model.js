const mongoose = require('mongoose');

//Creating mongoose schema
const ProductSchema = mongoose.Schema(

  {

    name: {
      type: String,
      require: [false, 'Please enter product name'],

    },

    quantity: {
      type: Number,
      require: false,
      defualt: 0
    },

    price: {
      type: Number,
      require: false,
      default: 0
    },

    image: {
      type: String,
      require: false,
    }
  },
  //Timestamp add 2 extra fields createdAt and updatedAt.
  {
    timestamps: true
    // timestamp: true
  }
)
const product = mongoose.model('Product', ProductSchema);
module.exports = product;