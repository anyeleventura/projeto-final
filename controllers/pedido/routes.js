const express = require("express");
const app = express.Router();
const controller = require("./controller");

//Listar tudo
app.get("/pedidos", async (req, res) => {
    res.send(await controller.buscarTudo());
})

//Listar uma
app.get("/pedidos/:id", async (req, res) => {
    res.send(await controller.buscarUma(req.params.id));
})

//Criar
app.post("/pedidos", async (req, res) => {
    res.send(await controller.criar(req.body));
})

//Editar tudo
app.put("/pedidos/:id", async (req, res) => {
    res.send(await controller.editar(req.params.id, req.body));
})

//Editar uma
app.patch("/pedidos/:id", async (req, res) => {
    res.send(await controller.editarUma(req.params.id));
})

//Excluir uma
app.delete("/pedidos/:id", async (req, res) => {
    res.send(await controller.deletar(req.params.id));
})


module.exports = app;
