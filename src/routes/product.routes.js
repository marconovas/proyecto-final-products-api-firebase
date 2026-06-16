import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import * as  ProductController from "../controllers/products.controller.js";

const router = express.Router();

//GET
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

//POST
router.post("/create",
    authMiddleware, 
    ProductController.createProduct
);

//PUT
router.put("/:id", ProductController.updateProduct);

//DELETE
router.delete("/:id", 
    authMiddleware,
    ProductController.deleteProduct
);

export default router;