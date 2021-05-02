import React from 'react';
import './MenuPrincipal.css';
import LogoPlay from './../../Recursos/LogoPlayStation.jpg';
import buscar from './../../Recursos/lupa.png';

const MenuPrincipal = () => {
    return (
        <div className="MenuPrincipal">
            <div className="Parte1">
            <a className="BotonPlay"><img src={LogoPlay} alt="LogoPlay" className="LogoPlay"/></a>
            <a className="BotonD">Juegos ˅</a>
            <a className="BotonD">Hardware ˅</a>
            <a className="BotonD">Servicios ˅</a>
            <a className="BotonD">Noticias ˅</a>
            <a className="BotonD">Tienda ˅</a>
            <a className="BotonD">Asistencia ˅</a>
            </div>
            <div className="Parte2">
            <a className="BotonD">My PlayStation ˅</a>
            <a className="BotonIniciar">Iniciar sesión</a>
            <a className="botonBuscar"><img src={buscar} alt="Logo" className="buscar"/></a>
            </div>
            
        </div>
    )
}

export default MenuPrincipal;