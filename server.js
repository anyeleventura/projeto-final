const express = require('express');

const carrinhoRouter = require('./controllers/carrinho/routes');
const pedidoRouter = require('./controllers/pedido/routes');

const app = express(); // iniciando a aplicação com o express

app.use(express.json()) 

app.use(carrinhoRouter); //express usando o router de carrinho
app.use(pedidoRouter);  //express usando o router de meus pedidos

app.use((req, res) => {
    res.status(404).send("Nenhuma rota encontrada")
})

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('-------------');
    console.log('--- NO AR ---');
    console.log('-------------');
});


