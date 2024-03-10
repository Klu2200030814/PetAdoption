const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line to import the cors middleware
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/Payments");
const sendMail = require('./utils/SendMail')

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Petadoption', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use("/api/payment/", paymentRoutes);
// Define a schema for the signup data
const signupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  phoneNumber: String
});

// Change the model name to "User" and specify the collection name as "users"
const User = mongoose.model('User', signupSchema, 'user1');

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Your login logic here
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to handle signup POST request
app.post('/register', async (req, res) => {
  const { firstName, lastName, address, phoneNumber } = req.body;
  
  // Create a new user document
  const newUser = new User({
    firstName,
    lastName,
    address,
    phoneNumber
  });

  try {
    // Save the document to the database using promises
    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);
    res.status(200).json(savedUser);
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Error saving user');
  }
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
