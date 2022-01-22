import React, { useState } from "react";
import "../css/Convert3DPro.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import line from "../images/underline.png";
import technologies from "../utils/profesional3d";

const Convert3DPro = () => {
    const [position, setPosition] = useState(0);

    const technologiesList = technologies.map((tech) => (
        <img key={tech} src={tech} alt="technology 3d" />
    ));
    const technologiesGroups = [
        [technologiesList[0], technologiesList[1]],
        [technologiesList[2], technologiesList[3]],
        [technologiesList[4], technologiesList[5]],
    ];

        const nextPosition = () => {
            setPosition(
                position === technologiesGroups.length - 1 ? 0 : position + 1
            );
        };

        const previousPosition = () => {
            setPosition(
                position === 0 ? technologiesGroups.length - 1 : position - 1
            );
        };

    return (
        <div className="Convert3DPro">
            <div className="convert-container container padding">
                <div className="convert-header">
                    <h1>
                        CONVIÉRTETE EN <br />
                        <span>PROFESIONAL 3D</span>
                        <img
                            className="convert-underline"
                            src={line}
                            alt="underline"
                        />
                    </h1>
                    <p>
                        Alcanza el nivel que deseas en menos de un año. Aprende
                        y descubre sobre la industria creativa mas rentable del
                        mercado.
                    </p>
                </div>
                <div className="convert-content">{technologiesList}</div>
                <div className="convert-content-mobile">
                    <div className="convert-technologies">
                        {technologiesGroups[position]}
                    </div>
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

export default Convert3DPro;
