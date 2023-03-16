import Logodc from './logodc.svg';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Paragrafo from '../Paragrafo';

import "./style.css";

export default function Footer()
{
    return(
        <>
        <footer>
            <div className="sectionup">
                <div className="about">
                    <div className="logo">
                        <div><img alt="logo da Digital College" src={Logodc}/></div>
                        <div className="logonome"><h3>Digital Store</h3></div>
                    </div>
                    <Paragrafo class="paraabout" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."/>
                    <a href='https://www.facebook.com'><img alt="logo do Facebook" className="icon" src={Facebook}/></a>
                    <a href='https://www.instagram.com'><img alt="logo do Instagram" className="icon" src={Instagram}/></a>
                    <a href='https://twitter.com/home'><img alt="logo do Twitter" className="icon" src={Twitter}/></a>
                </div>
                <div className="column">
                    <h4>Informação</h4>
                    <a href='/'><Paragrafo text="Sobre Drip Store"/></a>
                    <a href='/'><Paragrafo text="Segurança"/></a>
                    <a href='/'><Paragrafo text="Wishlist"/></a>
                    <a href='/'><Paragrafo text="Blog"/></a>
                    <a href='/'><Paragrafo text="Trabalhe conosco"/></a>
                    <a href='/'><Paragrafo text="Meus pedidos"/></a>
                </div>
                <div className="column category">
                    <h4>Categorias</h4>
                    <a href='/'><Paragrafo text="Camisetas"/></a>
                    <a href='/'><Paragrafo text="Calças"/></a>
                    <a href='/'><Paragrafo text="Bonés"/></a>
                    <a href='/'><Paragrafo text="Headphones"/></a>
                    <a href='/'><Paragrafo text="Tênis"/></a>
                </div>
                <div className="column">
                    <h4>Contato</h4>
                    <Paragrafo class="paragrafo" text="Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161"/>
                    <Paragrafo class="paragrafo" text="(85) 3051-3411"/>
                </div>
            </div>
            
            <div className="creditos">
                <div>
                <Paragrafo class="patente" text="@ 2022 Digital College"/>
                </div>
            </div>
        </footer>
        
        </>
    )
}