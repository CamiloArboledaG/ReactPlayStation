import React from 'react';
import './ItemJuegoProximamente.css';

const ItemJuegoProximamente = ({Titulo,Precio,Imagen}) => {

    return (

        <a className="aClass">

            <img src={Imagen} alt="Imagen1" className="Imagen" />
            <div className="textoDiv">
                <h4 className="h4class">{Titulo}</h4>
                <h4 className="Reservaclass">Reserva</h4>
                <h3 className="h3class2">{Precio}</h3>
            </div>
        </a>
    )

}

export default ItemJuegoProximamente;
