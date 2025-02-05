const Product = require('../models/product.model.js');

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    //Get List Of all products
    const products = await Product.find({});
    if (products.length == 0) return res.status(404).json({ messsage: 'No Products Found! Please Add One.' })
    // send list
    res.status(200).json(products);

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
// Get Single Product Api
const getSingleProduct = async (req, res) => {
  try {
    //Destructure method to get Id that is received in api by user
    const { id } = req.params;
    // find single product by id
    const productById = await Product.findById(id);
    if (!productById) return res.status(404).json({
      message: "No Product Find Please Try Another."
    })
    // Send specific product
    res.status(200).json(productById);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// Handle Post api for products
// Add Product
const addProduct = async (req, res) => {
  //Log Body which is received.
  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle Put Api Request
// Update Single Item
const updateProduct = async (req, res) => {  // ✅ Updated function name
  try {
    // get product id sent by user,
    const { id } = req.params;
    // find Product By ID and update it with user given data
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) return res.status(404).json({
      message: "No Product Find Please Try Another."
    })
    //Get updated product
    const updatedProduct = await Product.findById(id);
    // Send Updated Product
    res.status(200).json({
      message: "Product has been Updated",
      product: updatedProduct
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}


// Handle Delete Api
// delete single product
const deleteProduct = async (req, res) => {
  try {
    // get product id from user
    const { id } = req.params;
    // find product by id and delete it
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) return res.status(404).json({ message: 'No Product Find Please Try Another.' })
    // send deleted product
    res.status(200).json({
      message: 'Product has been deleted successfully!',
      product: deleteProduct
    })
  } catch (e) {
    res.status(500).json({
      message: e.message
    })
  }
}
// Delete All Products
const deleteAllProducts = async (req, res) => {
  try {
    //to delete All products
    const result = await Product.deleteMany({});
    if (!result) return res.status(404).json({ message: 'Database is Already empty...' })
    res.status(200).json({
      message: 'All Products are deleted successfully',
      deleteCoutn: result.deletedCount
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts
}