const db = require("../../connection/database");
const tabela = "tb_pedido"; 

//Produto em trânsito
async function listarTudo(){
    let lista = await db.execute(`
        SELECT * FROM ${tabela} WHERE status = 1;
    `);
    return (lista); 
}

//Pedido finalizado
async function inativo(id){
    await db.execute(`
        UPDATE ${tabela} SET status = 0 WHERE id = ${id};
    `);
}

//Pedido cancelado
async function listarUm(id){
    let lista =  await db.execute(`
    UPDATE ${tabela} SET status = 0 WHERE id = ${id};
`);
    return (lista[0]);
}


async function criar(dados){
    let sql = await db.execute(`
        INSERT INTO ${tabela} (nome) VALUES ('${dados.nome}');
    `);
    let pedido = await db.execute(`
        SELECT * FROM ${tabela} WHERE id = ${sql.insertId};
    `);
    return (pedido[0]);
}

async function editar(id, dados){
    carrinho.forEach((cada) => {
        if(cada.id == id){
            cada.nome = dados.nome;
            cada.status = dados.status;
        }
    });
}

async function excluir(id){
    await db.execute(`
        DELETE FROM ${table} WHERE id = ${id};
    `);
}

module.exports ={
    listarTudo,
    listarUm,
    criar,
    inativo,
    editar,
    excluir
}
