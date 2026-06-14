import express from "express";
import cors from "cors";
const app = express();

app.use(cors());


const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})