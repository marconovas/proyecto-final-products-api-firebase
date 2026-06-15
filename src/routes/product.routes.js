import express from "express";
import * as  ProductController from "../controllers/products.controller.js";

const router = express.Router();

//GET
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

//POST
router.post("/create", ProductController.createProduct);

//PUT
router.put("/:id", ProductController.updateProduct);

//DELETE
router.delete("/:id", ProductController.deleteProduct);

export default router;