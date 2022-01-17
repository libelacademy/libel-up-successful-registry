import React from "react";
import "../css/Header.css";
import "../css/BulletPoint.css";

import { IoAdd, IoChevronForward } from "react-icons/io5";

import zbrush from "../images/technologies/zbrush.png";
import maya from "../images/technologies/maya.png";
import substance from "../images/technologies/substance.png";
import marmoset from "../images/technologies/marmoset.png";
import unreal from "../images/technologies/unreal.png";

import avatarTeacher from "../images/avatars/AvatarsTeacher.png";
import Countdown from "./Countdown";

const benefits = [
    "Clases online en vivo.",
    "Material de ayuda.",
    "Grabaremos las clases.",
    "Acceso Discord.",
    "Certificado.",
    "Acceso 1 año.",
];

const BulletPoint = ({ color }) => {
    const background = color + "25";

    return (
        <div className="BulletPoint" style={{ backgroundColor: background }}>
            <div className="center" style={{ backgroundColor: color }}></div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="Header">
            <div className="header-container container">
                <div className="header-item">
                    <BulletPoint color={"#77bf41"} />
                    Feedback en vivo
                </div>
                <h1>
                    máster personajes para
                    <br />
                    <span className="video-games">videojuegos</span>
                    <br />
                    <span>AAA</span>
                </h1>
                <div className="header-buttons">
                    <button className="watch-trailer">
                        VER TRAILER
                        <span>
                            <IoChevronForward />
                        </span>
                    </button>
                    <button className="see-theme">VER TEMÁTICA</button>
                </div>
                <div className="master-benefits">
                    {benefits.map((benefit, e) => (
                        <div className="header-item">
                            <BulletPoint color={"#6000de"} />
                            {benefit}
                        </div>
                    ))}
                </div>
                <div className="header-information">
                    <div className="header-information-content">
                        <img src={avatarTeacher} alt="Avatar Teacher" />
                        <p className="teacher">
                            <span>Profesor: </span>Pablo Perdomo
                        </p>
                        <h2>
                            Agenda tu
                            <br />
                            asesoría gratis
                        </h2>
                        <a className="header-tag" href="/#">
                            SOLICITAR ASESORÍA
                            <span>
                                <IoAdd />
                            </span>
                        </a>
                        <Countdown />
                        <div className="master-cost">
                            <p>
                                PAGAR <span>$849</span> USD
                            </p>
                        </div>
                        <h3>MÉTODOS DE PAGO</h3>
                        <caption>
                            * Pregunta por nuestros planes
                            <br />
                            de financiación.
                        </caption>
                    </div>
                    <div className="header-information-technologies">
                        <img src={zbrush} alt="technology" />
                        <img src={maya} alt="technology" />
                        <img src={substance} alt="technology" />
                        <img src={marmoset} alt="technology" />
                        <img src={unreal} alt="technology" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
