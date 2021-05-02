import React from 'react';
import './OfertasPascua.css'
import FinalFantasy from './../../../Recursos/FinalFantasy.PNG';
import TheShow from './../../../Recursos/TheShow.PNG';
import ItTakesTwo from './../../../Recursos/ItTakesTwo.PNG';
import NoLimits from './../../../Recursos/NoLimits.PNG';



const OfertasPascua = () => {

    return (
        <div className="OfertasPascua">
            <img src={FinalFantasy} alt="FinalFantasy" className="tamaño FinalFantasy"/>
            
            <img src={TheShow} alt="TheShow" className="tamaño TheShow"/>
            
            <img src={ItTakesTwo} alt="ItTakesTwo" className="tamaño ItTakesTwo"/>
            
            <img src={NoLimits} alt="NoLimits" className="tamaño NoLimits"/>

        </div>

    )

}

export default OfertasPascua;