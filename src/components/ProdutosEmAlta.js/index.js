function Produto(props) 
{
    return(
        <div className="Produtos"> 
            <img src= {props.produto.foto} />
            <p>{props.produto.nome} </p>
            <p> $ {props.produto.valor} </p>

        </div>
       
    )
}

export default Produto;