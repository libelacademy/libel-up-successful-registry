import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "../css/Masters.css";

import dot from "../images/logo_dot.png";

import masters from "../utils/featruredMasters";
import Master from "./cards/Master";

const Masters = () => {


    const [position, setPosition] = useState(0);

    const masterList = masters.map((master, i) => (
        <Master
            key={i}
            image={master.image}
            url={master.url}
            professor={master.professor}
            title={master.title}
            technology={master.technology}
        />
    ));

            const nextPosition = () => {
                setPosition(
                    position === masterList.length - 1 ? 0 : position + 1
                );
            };

            const previousPosition = () => {
                setPosition(
                    position === 0 ? masterList.length - 1 : position - 1
                );
            };

    return (
        <div className="Masters">
            <div className="masters-container container padding">
                <div className="masters-header">
                    <div className="masters-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            MÁSTERES
                            <br />
                            DESTACADOS
                        </h1>
                    </div>
                    <div className="masters-text">
                        <h2>
                            !Obtén <br />
                            <span className="color">
                                sorprendentes
                                <br />
                                resultados
                            </span>{" "}
                            en <br />
                            corto tiempo¡
                        </h2>
                        <p>
                            No necesitas de conocimientos
                            <br />
                            previos. Solamente tienes que
                            <br />
                            adaptarte a{" "}
                            <span className="underline">
                                nuestro plan de estudios.
                            </span>
                        </p>
                        <a
                            href="https://calendly.com/libel"
                            target={"_blank"}
                            rel="noreferrer"
                            className="know-more"
                        >
                            QUIERO SABER MÁS{" "}
                            <IoChevronForward style={{ marginLeft: "2px" }} />
                        </a>
                    </div>
                </div>
                <div className="masters-content">
                    <div className="masters-column-1">{masterList[0]}</div>
                    <div className="masters-column-2">
                        {masterList[1]}
                        {masterList[2]}
                    </div>
                    <div className="masters-column-3">{masterList[3]}</div>
                </div>
                <div className="masters-content-mobile">
                    {masterList[position]}
                    <div className="results-buttons">
                        <button
                            className="result-previous"
                            onClick={() => {
                                previousPosition();
                            }}
                        >
                            <IoChevronBack />
                        </button>
                        <button
                            className="result-next"
                            onClick={() => {
                                nextPosition();
                            }}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Masters;
