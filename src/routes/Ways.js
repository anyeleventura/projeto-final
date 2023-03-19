import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produto from '../pages/Produto'
export default function Ways()

{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produto /> }/>
                <Route path='/categorias' element="pagina de categorias"/>
                <Route path='/meus-pedidos' element="pagina de meus pedidos"/>
            </Routes>
        </BrowserRouter>
        </>
    )
}