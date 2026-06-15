import express from "express";
import cors from "cors";
import ProductsRouter from "../src/routes/product.routes.js";
import { notFound } from "../src/middlewares/notFound.middleware.js";

const app = express();

app.use(cors());

app.use("/api/products", ProductsRouter);

//ROUTE NOT FOUND MIDDLEWARE
app.use(notFound);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})