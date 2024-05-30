
const { request, response } = require("express")
const { zapatillas } = require("../zapatillas")

const getZapatillas = (req, res) => {
    return res.json({
        ok: true,
        statusCode: 200,
        zapatillas
    });
}

const getZapatillasById = (req = request, res = response) => {
    
    let id = parseInt(req.params.id);

    let zapatillasABuscar = "";

    zapatillasABuscar = zapatillas.find((zapatilla) => {
        return zapatilla.id === id;
    });

    if (zapatillasABuscar) {
        return res.json({
            ok: true,
            statusCode: 200,
            zapatillasABuscar
        })
    } else {
        return res.json({
            ok: true,
            statusCode: 404,
            msg: "No hay zapatillas con ese id"
        })
    }
}

const getZapatillasByMarca = (req = request, res = response) => {
    let marca = req.params.marca.toLowerCase;

    let zapatillasPorMarca = "";

    zapatillasPorMarca = zapatillas.filter((zapatilla) => {
        return zapatilla.marca.toLowerCase === marca;
    })

    if (zapatillasPorMarca > 0)  {
        return res.json({
            ok: true,
            statusCode: 200,
            zapatillasPorMarca
        })
    } else {
        return res.json({
            ok: true,
            statusCode: 404,
            msg: "No hay zapatillas de esa marca"
        })
    }

}

module.exports = {
    getZapatillas,
    getZapatillasById,
    getZapatillasByMarca
}