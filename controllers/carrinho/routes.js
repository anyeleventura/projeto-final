const express = require("express");
const app = express.Router();
const controller = require("./controller");

const URL = '/carrinhos';

//Listar tudo
app.get("/carrinhos", async (req, res) => {
    res.send(await controller.buscarTudo());
})

//Listar uma
app.get("/carrinhos/:id", async (req, res) => {
    res.send(await controller.buscarUma(req.params.id));
})

//Criar
app.post("/carrinhos", async (req, res) => {
    res.send(await controller.criar(req.body));
})

//Editar tudo
app.put("/carrinhos/:id", async (req, res) => {
    res.send(await controller.editar(req.params.id, req.body));
})

//Editar uma
app.patch("/carrinhos/:id", async (req, res) => {
    res.send(await controller.editarUma(req.params.id));
})


app.patch(`${URL}/:id`, async (req, res) => {
    let dados = req.body;

    let Existente = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);
    
//testando se existe algum produto com aquele id
    if (undefined === Existente[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE tb_carrinho SET
            nome='${req.body.nome || Existente[0].nome}',
            imagem='${req.body.imagem || Existente[0].imagem}',
            valor='${req.body.valor || Existente[0].valor}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});


module.exports = app;
