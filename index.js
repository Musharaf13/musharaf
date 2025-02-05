// Import express package
const express = require('express');
const app = express();

// To pass JSON through express
app.use(express.json());

// To use form data when posting product
app.use(express.urlencoded({ extended: false }));

// Import mongoose
const mongoose = require('mongoose');

// Import router
const productRoutes = require('./routes/product.route.js');

app.use('/api/products', productRoutes);

// Base route to display "Life is beautiful"
app.get('/', (req, res) => {
  res.send('Life is beautiful');
});

// Set up Mongoose Connection String
const connectionString = 'mongodb+srv://mirsameer513:Khan123k%40@backenddb.thur6.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB';

// Connect to Database
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected To Backend DB');
    // Listen to the port
    app.listen(3000, () => {
      console.log('Server Is Connected To The Port 3000');
    });
  })
  .catch((e) => {
    console.log('Failed To Connect, Error: ' + e);
  });
