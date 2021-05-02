import React from 'react';
import './Proximamente.css';
import BannerNuevosJuegos from './BannerProximamente/BannerProximamente';
import ListaJuegos from './ListaJuegos/ListaJuegosProximamente';

const Proximamente = () => {

    return (
        <div className="Proximamente">
            <BannerNuevosJuegos/>
            <ListaJuegos></ListaJuegos>
        </div>

    )

}

export default Proximamente;
