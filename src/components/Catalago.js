import Produto from "./ProdutosEmAlta.js";

function Catalogo(props) {

    let produtos = [];

    for (let x=0; x<props.produtos.length; x++) {
        produtos.push(        <Produto produto={props.produtos[x]} />)
    }

    return(
    <div className="catalogo">
        { produtos}
    </div>
    )
}

export default Catalogo;