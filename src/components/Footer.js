import React from "react";
import "../css/Footer.css";

import logo from "../images/logo.png";

import facebook from "../images/social_networks/005-facebook.png";
import twitch from "../images/social_networks/020-twitch.png";
import instagram from "../images/social_networks/008-instagram.png";
import whatsapp from "../images/social_networks/023-whatsapp.png";
import linkedin from "../images/social_networks/009-linkedin.png";
import discord from "../images/social_networks/Trazado 57.png";
import youtube from "../images/social_networks/025-youtube.png";
import telegram from "../images/social_networks/018-telegram.png";
import DegradeButton from "./buttons/DegradeButton";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-content">
                <div className="footer-content-container container">
                    <div className="footer-shortcuts">
                        <ul className="footer-list">
                            <li>Cursos</li>
                            <li>Masters</li>
                            <li>Escuela Zbrush</li>
                            <li>Escuela Blender</li>
                            <li>Escuela Rigging</li>
                            <li>Escuela Ilustración</li>
                            <li>Licencias</li>
                            <li>Resultados</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <img
                            src={logo}
                            alt="Libel Academy"
                            className="footer-logo"
                        />
                        <h4>CONTACTO</h4>
                        <DegradeButton name="CREAR CUENTA" width={200} />
                        <p className="help">
                            <a href="/#">Trabaja con nosotros</a>
                            <br />o <a href="/#">solicita ayuda</a>
                        </p>
                        <div className="social-networks">
                            <a href="/#" target={"_blank"}>
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={twitch} alt="twitch" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={whatsapp} alt="whatsapp" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={discord} alt="discord" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a href="/#" target={"_blank"}>
                                <img src={telegram} alt="telegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container container">
                    <p className="terms">Términos y Condiciones</p>
                    <p className="copyright">&copy; Copyright 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
