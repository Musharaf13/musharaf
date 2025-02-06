const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct, deleteAllProducts, uploadImage } = require('../controllers/product.controller.js');

// Simplified Routes.
router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
// router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAllProducts);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // ✅ Use relative path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // ✅ Limit to 5MB
});

router.post('/', upload.single('photo'), uploadImage);


module.exports = router;
