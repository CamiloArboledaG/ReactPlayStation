import React from 'react';
import './Ofertas.css'
import LogoStore from './../../Recursos/Oferta.PNG';


const Ofertas = () => {

    return (
        <div className="Ofertas">
            <img src={LogoStore} alt="Ofertas" className="OfertasLogo"/>
            <div className="Pascua">
                <h1>Ofertas de Pascua</h1>
                <a className="Vermas" >Ver más</a>
            </div>

        </div>

    )

}

export default Ofertas;