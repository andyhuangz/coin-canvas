//// JS file for the server



/// Setup

require('dotenv').config(); // Load environment variables from .env
const User = require("./User.js");
const Transaction = require("./Transaction.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let PORT = process.env.PORT;
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


// Connect to MongoDB using async/await
let DB_URL = process.env.DB_URL;
const mongoose = require("mongoose");
async function connectDB() {
    try {
      await mongoose.connect(DB_URL);
      console.log("Successfully connected to the database");
    } 
    catch (error) {
      console.log("Failed to connect to the database");
    }
}
connectDB();



/// Extra functions

function generateToken(user) {
  // Return a token associated with the user 
  return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30d"});
}

function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // If the token does not exist
  if (token == null) {
    return response.status(401);
  }

  // Else verify it
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    // If there is an error
    if (error) {
      return response.status(401);
    }

    // Otherwise, attach the user to request and move on to the next middleware/route
    request.user = user;
    next();
  });
}



/// Routes

// Get request (getting a user's information)
app.get("/getUser", authenticateToken, async (request, response) => {
  // Getting the user information
  const user = await User.findById(request.user._id);
  const {firstName, lastName, email, username} = user;
  
  
  // Returning the information
  response.status(200).json({firstName, lastName, email, username});
  return;
  
});


// Post request (creating a new account)
app.post("/register", async (request, response) => { 
  // Extracting the details
  let { firstName, lastName, email, username, password } = request.body;

  try {
    // If the user already exists, do not create an account
    const tempUser = await User.findOne({username: username});
    if (tempUser != null) {
      response.status(409).json({createdUser: false});
      return;
    }

    // Otherwise, create a new account and save it to the database
    password = await bcrypt.hash(password, 10);
    const newUser = new User({firstName, lastName, email, username, password});
    await newUser.save();
    response.status(201).json({createdUser: true});
  }
  
  catch (error) {
    console.log("Error in creating an account");
  }
});


// Post request (logging in)
app.post("/login", async (request, response) => {
  // Extracting the details
  const { username, password } = request.body;

  try {
    // If the account exists, log them in
    const user = await User.findOne({username: username});

    if (user != null && (await bcrypt.compare(password, user.password))) {
      // Generate the JWT and send stuff back to the client
      response.status(200).json({loggedIn: true, user, accessToken: generateToken(user)});
    }

    // Otherwise, do not log them in
    else {
      response.status(404).json({loggedIn: false, user: null, accessToken: null});
    }
  }
  
  catch (error) {
    // Otherwise, do not log them in
    response.status(404).json({loggedIn: false, user: null, accessToken: null});
    console.log(error);
  } 
});


// Post request (adding a transaction)
app.post("/addTransaction", authenticateToken, async (request, response) => {



});



/// Running the server
app.listen(PORT, () => {
    console.log("SERVER RUNNING");
});
