import React from 'react';
import './ItemsVermas.css'
import Imagen1 from './../../../Recursos/Vermas/1.PNG';
import Imagen2 from './../../../Recursos/Vermas/2.PNG';
import Imagen3 from './../../../Recursos/Vermas/3.PNG';
import Imagen4 from './../../../Recursos/Vermas/4.PNG';
import Imagen5 from './../../../Recursos/Vermas/5.PNG';
import Imagen6 from './../../../Recursos/Vermas/6.PNG';
import Imagen7 from './../../../Recursos/Vermas/7.PNG';


const ItemsVermas = () => {

    return (
        <div className="ItemsVermas">
            <img src={Imagen1} alt="FinalFantasy" className="tamaño ImagenVermas1"/>
            
            <img src={Imagen2} alt="TheShow" className="tamaño ImagenVermas2"/>
            
            <img src={Imagen3} alt="ItTakesTwo" className="tamaño ImagenVermas3"/>
            
            <img src={Imagen4} alt="NoLimits" className="tamaño ImagenVermas4"/>

            <img src={Imagen5} alt="NoLimits" className="tamaño tamaño2 ImagenVermas5"/>

            <img src={Imagen6} alt="NoLimits" className="tamaño tamaño2 ImagenVermas6"/>

            <img src={Imagen7} alt="NoLimits" className="tamaño tamaño2 ImagenVermas7"/>

        </div>

    )

}

export default ItemsVermas;