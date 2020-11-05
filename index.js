require("dotenv").config();
//Import Packages
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
//Initialize Express
const app = express();

//import Route - Views 
const userRouter = require("./api/users/user.view");

//middlewares 
// 1. Cross Origin 
app.use(cors({
  origin: 'http://testwebsite.com',
  credentials: true
}));

// 2. Json Parser 
app.use(express.json());

// 3. Cookie Parser 
app.use(cookieParser());

// 4. Router 
app.use("/api/users", userRouter);


//Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
