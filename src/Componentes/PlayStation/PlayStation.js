import React from 'react';
import './PlayStation.css';
import BannerLogo from './../Banner/BannerLogo/BannerLogo';
import MenuPrincipal from './../Banner/MenuPrincipal/MenuPrincipal';
import MenuPegajoso from './../Banner/MenuPegajoso/MenuPegajoso';
import Ofertas from './Ofertas/Ofertas';
import OfertasPascua from './Ofertas/OfertasPascua/OfertasPascua';
import PlayAtHome from './PlayAtHome/PlayAtHome';
import NuevosJuegos from './NuevosJuegos/NuevosJuegos';
import Proximamente from './Proximamente/Proximamente';
import VerMas from './VerMas/VerMas';
import ItemsVermas from './VerMas/ItemsVermas/ItemsVermas';
import InfoFinal from './../InfoFinal/InfoFinal';

const PlayStation = () => {

    return (
        <div className="PlayStation">
        <BannerLogo/>
        <MenuPrincipal/>
        <MenuPegajoso/>
        <Ofertas/>
        <OfertasPascua/>
        <PlayAtHome/>
        <NuevosJuegos/>
        <Proximamente/>
        <VerMas/>
        <ItemsVermas/>
        <InfoFinal/>


        </div>
    )

}

export default PlayStation;