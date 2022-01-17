import React, { useEffect, useState } from "react";
import "../css/ContentMaster.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import {
    standard,
    intermediate,
    advanced,
    bonuses,
} from "../utils/contentMaster";

const ContentMaster = () => {
    const [active, setActive] = useState("standard");
    const [option, setOption] = useState(standard);
    const [displayButton, setDisplayButton] = useState("none");
    const [position, setPosition] = useState(0);
    const [disabledButtonPrevious, setDisabledButtonPrevious] = useState(false);
    const [disabledButtonNext, setDisabledButtonNext] = useState(false);

    useEffect(() => {
        if (active === "standard") {
            setOption(standard);
        }
        if (active === "intermediate") {
            setOption(intermediate);
        }
        if (active === "advanced") {
            setOption(advanced);
        }
        if (active === "bonus") {
            setOption(bonuses);
        }
    }, [active]);

    useEffect(() => {
        if (option.length > 1) {
            setDisplayButton("flex");
        } else {
            setDisplayButton("none");
        }
    }, [option]);

    const nextPosition = () => {
        if (position !== option.length - 1) {
            setPosition(position + 1);
        }
    };

    const previousPosition = () => {
        if (position !== 0) {
            setPosition(position - 1);
        }
    };

    useEffect(() => {
        setDisabledButtonPrevious(position === 0);
        setDisabledButtonNext(position === option.length - 1);
    }, [position, option]);

    return (
        <div className="ContentMaster">
            <div className="content-master-container container">
                <div className="content-master-sliders">
                    <div
                        className="content-master-content"
                        style={{
                            backgroundImage: `url(${option[position].image})`,
                        }}
                    >
                        <div className="content-master-filter"></div>
                        <div className="content-master-description">
                            <h2>{option[position].id}</h2>
                            <p>{option[position].title}</p>
                        </div>
                    </div>
                    <div className="content-master-navigation">
                        <button
                            className="master-navigation-button-previous"
                            style={{ display: displayButton }}
                            disabled={disabledButtonPrevious}
                            onClick={previousPosition}
                        >
                            <IoChevronBack />
                        </button>
                        <button
                            className={
                                active === "standard"
                                    ? "master-navigation-option option-active"
                                    : "master-navigation-option"
                            }
                            onClick={() => {
                                setPosition(0);
                                setActive("standard");
                            }}
                        >
                            ESTÁNDAR
                        </button>
                        <button
                            className={
                                active === "intermediate"
                                    ? "master-navigation-option option-active"
                                    : "master-navigation-option"
                            }
                            onClick={() => {
                                setPosition(0);

                                setActive("intermediate");
                            }}
                        >
                            INTERMEDIO
                        </button>
                        <button
                            className={
                                active === "advanced"
                                    ? "master-navigation-option option-active"
                                    : "master-navigation-option"
                            }
                            onClick={() => {
                                setPosition(0);

                                setActive("advanced");
                            }}
                        >
                            AVANZADO
                        </button>
                        <button
                            className={
                                active === "bonus"
                                    ? "master-navigation-option option-active"
                                    : "master-navigation-option"
                            }
                            onClick={() => {
                                setPosition(0);

                                setActive("bonus");
                            }}
                        >
                            BONUS
                        </button>
                        <button
                            className="master-navigation-button-next"
                            style={{ display: displayButton }}
                            disabled={disabledButtonNext}
                            onClick={() => {
                                nextPosition();
                            }}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
                <div className="content-master-info">
                    <h1>
                        CONTENIDO
                        <br />
                        DEL <span>MÁSTER</span>
                    </h1>
                    <p>
                        Estudia online con FEED BACK en Discord y tendrás
                        material <span>PREMIUM por 1 año</span> donde podrás
                        pulir tu técnica.
                    </p>
                    <button>VER TEMÁTICA</button>
                </div>
            </div>
        </div>
    );
};

export default ContentMaster;
