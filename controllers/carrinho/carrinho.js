const express = require("express");
const app = express.Router();
const controller = require("./controller");

function cadastrar(dados) {
    carrinho.push(dados);
    return ('dados');
}

function buscarTudo() {
    let lista = carrinho.filter((cada) => {
        return cada.status
    })
    return (lista);
}

function buscarUm(id) {
    let busca = carrinho.filter((cada) => {
        return cada.id == id;
    })
    return (busca);
}

function editar(id, corpo){
    carrinho.forEach((cada) => {
        if(cada.id == id){
            cada.nome = corpo.nome;
            cada.status = corpo.status;
        }
    });
}

function deletar(id){
    let novaLista = carrinho.filter((cada) => {
        return cada.id != id;
    });
    
    carrinho = novaLista;
}

module.exports = {
    cadastrar,
    buscarTudo,
    buscarUm,
    editar,
    deletar
};

