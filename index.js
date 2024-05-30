
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;



const { getZapatillas, getZapatillasById,  getZapatillasByMarca} = require("./controllers/zapatillas.controllers")

app.use(cors());

app.get("/", getZapatillas)

app.get("/:id", getZapatillasById)

app.get("/:marca", getZapatillasByMarca)


app.listen(puerto, () => {
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
})