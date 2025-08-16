const express = require("express");
const router = express.Router();
const { getProducts,createProduct,getProductById,updateProduct, deleteProduct } = require("../controllers/product.controller.js");

// Route to get all products
router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
