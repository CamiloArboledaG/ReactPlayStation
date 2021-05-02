import React from 'react';
import './BannerLogo.css'
import Logo from './../../Recursos/LogoSony.png';

const BannerLogo = () => {

    return (
        <div className="BannerLogo">
            <a className="botonLogo"><img src={Logo} alt="Logo" className="Logo"/></a>
        </div>

    )

}

export default BannerLogo;