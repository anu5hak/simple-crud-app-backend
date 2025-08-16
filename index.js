const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");
require("dotenv").config();

app.use(express.json()); 

app.use("/products/", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node Api Server");
});

mongoose.connect( process.env.DB_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
