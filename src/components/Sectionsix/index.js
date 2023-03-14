import Ofertaespecial from './ofertaespecial.svg';
import Paragrafo from '../Paragrafo';
import Button from '../Button';

import './style.css';

export default function SectionSix()
{
    return(
        <>
            <section className="sectionsix">
                <div className="colunaone">
                    <img alt="foto de um AirJordan, edição  especial, nas cores preto e amarelo" className="image" src={Ofertaespecial}></img>
                </div>
                <div className="colunatwo">
                    <h5>Oferta especial</h5>
                    <h2>Air Jordan edição de colecionador</h2>
                    <Paragrafo class="paragrafo" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"/>
                    <a href="/*"><Button class="buttonsee" text="Ver Oferta" /></a>
                </div>
            </section>
        </>
    )
}