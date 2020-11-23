require("dotenv").config();
//Import Packages
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
//Initialize Express
const app = express();

//import Route - Views 
const userRouter = require("./api/users/user.view");
const categoryRouter = require("./api/category/category.view");
const productRouter = require("./api/product/product.view");

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
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);


//Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
