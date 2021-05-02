import React from 'react';
import './ListaJuegosProximamente.css';
import Imagen1 from './../../../Recursos/Proximamente/1.PNG'
import Imagen2 from './../../../Recursos/Proximamente/2.PNG'
import Imagen3 from './../../../Recursos/Proximamente/3.PNG'
import Imagen4 from './../../../Recursos/Proximamente/4.PNG'
import Imagen5 from './../../../Recursos/Proximamente/5.PNG'
import ItemJuego from './ItemJuego/ItemJuegoProximamente';

const ListaJuegosProximamente = () => {

    return (
        <div className="ListaJuegos">
            <ul className="Lista">
                <li className="Item">
                    <ItemJuego Titulo="Secret Neighbor" Precio="US$99.99" Imagen={Imagen1} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="Edición digital de lujo de Returnal" Precio="US$89.99" Imagen={Imagen2} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="Returnal" Precio="US$84.99" Imagen={Imagen3} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="Edición Deluxe de Resident Evil Village P..." Precio="US$69.99" Imagen={Imagen4} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo={'Hood: Outlaws & Legends PS4 & PS5 (Pr...'} Precio="US$59.99" Imagen={Imagen5} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo={'Hood: Outlaws & Legends PS4 & PS5 (Pr...'} Precio="US$49.99" Imagen={Imagen5} />
                </li>
                
                <a className="botónSiguiente2">{'>'}</a>
            </ul>
            
        </div>

    )

}

export default ListaJuegosProximamente;
