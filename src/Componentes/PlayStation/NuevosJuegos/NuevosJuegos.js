import React from 'react';
import './NuevosJuegos.css';
import BannerNuevosJuegos from './BannerNuevosJuegos/BannerNuevosJuegos';
import ListaJuegos from './ListaJuegos/ListaJuegos';

const NuevosJuegos = () => {

    return (
        <div className="NuevosJuegos">
            <BannerNuevosJuegos/>
            <ListaJuegos></ListaJuegos>
        </div>

    )

}

export default NuevosJuegos;
