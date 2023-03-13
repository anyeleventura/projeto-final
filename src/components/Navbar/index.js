import {Button, TextField, Alert, Badge} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";
import { Container } from "@mui/system";
import logo from "./Vector.png";
// import lupa from "./EllipseLupa.png";

import "./styles.css";

export default function Navbar() {
    return (
        <div>
            <Container>
                <div className="container">
                <div className="logos"> 
                  <img className="vetor" src={logo} alt="logo"/>
                  <h1 className="logo">Digital College</h1>
               </div>
              
               <TextField className="input" label="Pesquisar produto..."/>
               {/* <img className="lupa" src={lupa} alt="lupa"/> */}
               </div>
               <Button className="btn btn-entrar" variant="contained">Entrar</Button>
            </Container>
            
            {/* <Favorite/>
            <Group/>

            <Badge color="primary" badgeContent={'4'}>
                <ShoppingCart style={{color: 'red'}}/>
            </Badge>
            Navbar

            <Alert severity="error">Aqui vai a mensagem</Alert> */}
        </div>
    )
}




