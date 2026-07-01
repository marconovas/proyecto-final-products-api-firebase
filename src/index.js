import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ProductsRouter from "../src/routes/product.routes.js";
import AuthRouter from "../src/routes/auth.routes.js";
import { notFound } from "../src/middlewares/notFound.middleware.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", ProductsRouter);
app.use("/auth", AuthRouter);

//ROUTE NOT FOUND MIDDLEWARE
app.use(notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})