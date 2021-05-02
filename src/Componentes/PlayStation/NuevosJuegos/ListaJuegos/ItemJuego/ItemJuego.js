import React from 'react';
import './ItemJuego.css';

const ItemJuego = ({Titulo,Precio,Imagen}) => {

    return (

        <a className="aClass">

            <img src={Imagen} alt="Imagen1" className="Imagen" />
            <div className="textoDiv">
                <h4 className="h4class">{Titulo}</h4>
                <h3 className="h3class">{Precio}</h3>
            </div>
        </a>
    )

}

export default ItemJuego;
