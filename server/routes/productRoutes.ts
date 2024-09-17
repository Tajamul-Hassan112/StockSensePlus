// routes/productRoutes.ts
import express from "express";
import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productController";

const productRoutes = express.Router();

// Route to create a new Product
productRoutes.post("/", createProduct); // Removed multer middleware

// Route to get all Products
productRoutes.get("/", getProducts);

// Route to update a Product by ID
productRoutes.put("/:id", updateProduct); // Removed multer middleware

// Route to delete a Product by ID
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
