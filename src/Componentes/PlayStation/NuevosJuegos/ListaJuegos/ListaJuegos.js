import React from 'react';
import './ListaJuegos.css';
import Imagen1 from './../../../Recursos/ListaNuevosJuegos/1.PNG'
import Imagen2 from './../../../Recursos/ListaNuevosJuegos/2.PNG'
import Imagen3 from './../../../Recursos/ListaNuevosJuegos/3.PNG'
import Imagen4 from './../../../Recursos/ListaNuevosJuegos/4.PNG'
import Imagen5 from './../../../Recursos/ListaNuevosJuegos/5.PNG'
import ItemJuego from './ItemJuego/ItemJuego';

const ListaJuegos = () => {

    return (
        <div className="ListaJuegos">
            <ul className="Lista">
                <li className="Item">
                    <ItemJuego Titulo="MLB The Show 21 Digital Deluxe Edition" Precio="US$99.99" Imagen={Imagen1} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="Atelier Mysterious Trilogy Deluxe Pack" Precio="US$89.99" Imagen={Imagen2} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="MLB The Show 21 Jackie Robinson Edition" Precio="US$84.99" Imagen={Imagen1} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="MLB The Show 21 PS5" Precio="US$69.99" Imagen={Imagen3} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="MLB The Show 21 PS4" Precio="US$59.99" Imagen={Imagen4} />
                </li>
                <li className="Item">
                    <ItemJuego Titulo="MotoGP 21" Precio="US$49.99" Imagen={Imagen5} />
                </li>
                
                <a className="botónSiguiente">{'>'}</a>
            </ul>
            
        </div>

    )

}

export default ListaJuegos;
