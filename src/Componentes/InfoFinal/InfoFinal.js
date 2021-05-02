import React from 'react';
import './InfoFinal.css';
import LogoFinal from './../Recursos/Final/LogoFinal.png';
import ZonaHoraria from './../Recursos/Final/ZonaHoraria.png';

const InfoFinal = () => {

    return (
        <div className="InfoFinal">
            <div className="País">
                <img src={LogoFinal} alt="LogoFinal" className="LogoFinal" />
                <div className="Zona">
                <img src={ZonaHoraria} alt="ZonaHoraria" className="ZonaHoraria"/>
                <h2 className="ZonaTexto">País/región: Colombia</h2>
                </div>
            </div>

            <div className="ListaOpciones">
                <div className="OpcionesPagina">
                <a className="opcionFinal">Asistencia</a>  
                <a className="opcionFinal">Política de privacidad</a>  
                <a className="opcionFinal">Términos de uso del sitio web</a>  
                <a className="opcionFinal">Mapa del sitio</a>  
                <a className="opcionFinal">PlayStation Studios</a>  
                <a className="opcionFinal">Legal</a>  
                <a className="opcionFinal">Acerca de SIE</a>  
                </div>
                <div className="OpcionesPagina">
                <a className="opcionFinal">Términos de servicio de PSN</a>  
                <a className="opcionFinal">Política de cancelación de PS Store</a>  
                <a className="opcionFinal">Avisos de salud</a>  
                <a className="opcionFinal">Acerca de las clasificaciones</a>  
                </div>
                <div className="OpcionesPagina">
                <a className="opcionFinal">Facebook</a>  
                <a className="opcionFinal">Twitter</a>  
                <a className="opcionFinal">YouTube</a>  
                <a className="opcionFinal">Instagram</a>  
                <a className="opcionFinal">Aplicación Android</a>  
                <a className="opcionFinal">Aplicación iOS</a>
                </div>
            </div>

            <div className="Creditos">
                <a>© 2021 Sony Interactive Entertainment Inc. Todos los derechos reservados.</a>
            </div>
        </div>
    )

}

export default InfoFinal;