import Catalogo from './components/Catalago';
import Ways from './routes/Ways';


let valor ="Produtos em Alta";

class Produto {
  constructor(nome, preco) {
    this.foto = foto;
    this.nome = nome;
    this.preco = preco;
  }
}

let p1 = new Produto('K-Swiss V8 - Masculino, 100')
let p2 = new Produto('K-Swiss V8 - Masculino, 100')
let p3 = new Produto('K-Swiss V8 - Masculino, 100')

let produtos = [p1, p2 ,p3]

export default function App() 
{
  return(
    <>
      <Ways/>
      <Catalogo />
    </>
  )
}

