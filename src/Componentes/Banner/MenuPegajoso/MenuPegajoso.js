import React from 'react';
import './MenuPegajoso.css'
import LogoStore from './../../Recursos/LogoPlayStationStore.png';



const MenuPegajoso = () => {
    return (
        <div className="MenuPegajoso">
            <div>
            <a className="BotonLogo"><img src={LogoStore} alt="LogoStore" className="LogoStore"/></a>
            </div>
            <div className="Div2">
                <a className="Sección  SeccionSelect">Más_reciente</a>
                <a className="Sección">Colecciones</a>
                <a className="Sección">Ofertas</a>
                <a className="Sección">PS5</a>
                <a className="Sección Sección2">Suscripciones</a>
            </div>
        </div>

    )

}

export default MenuPegajoso;